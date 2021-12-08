// production code, last updated on 08-12-21
// import TIMEZONE_DATA from "./timezonesList";
var dialCodesList,
  dialCode = "+1",
  country = "US",
  isMweb = window.screen.width < 500;

var STAGE_BASE_URL = "https://stage-api.whjr.one";
var PROD_BASE_URL = "https://api.byjusfutureschool.com";

const customClassMethod = (toClass, isAddClass, whichClass) => {
  if (isAddClass) {
    $(toClass).addClass(whichClass);
  } else {
    $(toClass).removeClass(whichClass);
  }
};

const customCssMethod = (toclass, lhs, rhs) => {
  $(toclass).css(lhs, rhs);
};

var parentMobileNum = "",
  selectedSubj = "",
  selectedGrade,
  otpValue = "",
  isUserExist,
  token,
  slotsData,
  selectedTimeSlot,
  studentDetails,
  dashboardLink,
  challengeCodeForOtp,
  myToast,
  timeZone,
  isUserAuthenticated = false,
  courseSubType = "PNO",
  timeInterval,
  isMusicKids = !window.location.href.includes("musicplus"),
  formatedParentNum,
  isSidePanelOpen = false,
  dialCodeCountry="US",
  otpSentCount = 0,
  otpFailureCount = 0,
  eventSource = window.location.href.includes("byjusfutureschool")
    ? "TRIAL_REGISTER_BYJUS"
    : "TRIAL_REGISTER_BYJUS_V2";

// Analytics

window.addEventListener("load", () => {
  window.WHJR_ANALYTICS = window.WHJR_ANALYTICS || {};

  // function will auto call when whjr-analytics library loaded.
  window.onWhjrAnalyticsLoad = function () {
    window.WHJR_ANALYTICS.init({});
    window.WHJR_ANALYTICS.load("w7YH8EJ1PxsEiWlAazGGdKaKbIXKcZl0");
    

    getGeoLocation(); // to set geo location props globally
  };

  var e = document.createElement("script");
  e.async = true;
  e.src =
    "https://s3-cdnwhjr.whjr.online/ebe4be0c-b789-4f37-a235-93422336de4c.js";
  document.head.appendChild(e);
});

function getGeoLocation() {
  $.ajax({
    type: "GET",
    url: `${PROD_BASE_URL}/api/V1/geo/getInfo?brandId=byju&courseType=ALL&timestamp=${new Date().getTime()}`,
    cache: false,

    success: handleGeoLocationData,
  });
}

function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

handleGeoLocationData = ({ data }) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url = window.location.href.replace(/\/$/, "");

  var page_name = "HOME";

  if (url.indexOf("/code") !== -1) {
    page_name = "CODING";
  } else if (url.indexOf("/math") !== -1) {
    page_name = "MATH";
  } else if (url.indexOf("/musicplus") !== -1) {
    page_name = "MUSIC FOR ALL";
  } else if (url.indexOf("/music") !== -1) {
    page_name = "MUSIC";
  }

  const globalObj = {
    geo_country_iso_code: data.countryIsoCode,
    geo_country_name: data.countryName,
    geo_latitude: data.latitude,
    geo_longitude: data.longitude,
    geo_postal_code: data.postalCode,
    geo_locale: "en_US",
    frontend_origin: window.location.hostname,
    product_version: "v2",
    page_name,
    page_locale: "en_us",
    page_type: "webflow",
    ua_os: navigator.userAgentData?.platform,
    ua_os_version: navigator.appVersion,
    ua_platform: navigator.platform,
    ua_device_type: navigator.userAgentData?.mobile ? "mobile" : "desktop",
    ua_browser_major_version: navigator.userAgentData?.brands[0]?.version,
    ua_browser: navigator.userAgentData?.brands[0]?.brand,
    ua_flow: "v2",
    utm_source: urlParams.get("utm_source"),
    utm_medium: urlParams.get("utm_medium"),
    utm_campaign: urlParams.get("utm_campaign"),
    path: url,
    search: urlParams.get("search"),
    course_type: page_name === "HOME" ? "ALL" : page_name,
  };

  window.WHJR_ANALYTICS.setEventProps(removeEmpty(globalObj));

  handlePageLoadAnalytics(page_name);
};

handlePageLoadAnalytics = (page_name) => {
  if (page_name === "HOME") {
    window.WHJR_ANALYTICS.trackPageView("Home", {});
  } else {
    window.WHJR_ANALYTICS.trackPageView("Registration", {});
  }
  // window.WHJR_ANALYTICS.trackEvent(`${page} page viewed`, {});
};

//side pannel code
(function () {
  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // if(!timeZone){
  $.ajax({
    type: "GET",
    url: `${PROD_BASE_URL}/api/V1/geo/getInfo?courseType=ALL&brandId=byju&timestamp=${new Date().getTime()}`,
    cache: false,
    success: function (res) {
      if (!timeZone) timeZone = res.data.timezone;
      country = res.data.countryIsoCode;
      console.log(res.data);
    },
  });
  // }
})();

// for dial codes
(function () {
  $.ajax({
    type: "GET",
    url: "https://mocki.io/v1/c1e47e61-1e8d-4ef8-ad01-835e245e148f", // custom mock api with dailcodes
    cache: false,

    success: (res) => {
      dialCodesList = res;

      $(`${isMweb ? ".mweb-dial-codes-list" : ".dial-codes-list"}`).empty();

      dialCodesList.map((item) => {
        const ele = `<a href="#" class="${
          isMweb ? "mweb-dropdown-link" : "dropdown-link"
        }   dial-code w-dropdown-link" data-countryCode=${item.code} data-code=${
          item.dial_code
        } tabindex="0">${item.flag} ${item.name} ${item.dial_code}</a>`;
        $(`${isMweb ? ".mweb-dial-codes-list" : ".dial-codes-list"}`).append(
          ele
        );
      });

      $(".dial-code").click((e) => {
        dialCode = e.target.dataset.code;
        dialCodeCountry = e.target.dataset.countrycode
        $(
          `${isMweb ? ".mweb-dial-codes-list" : ".dial-codes-list"}`
        ).removeClass("w--open");
        $(".parent-num-dropdown").removeClass("w--open");
        $(".dial-code-value").text(dialCode);
        isUserAuthenticated = false;
        $(".parent-mobile-num").val("");
        parentMobileNum = "";
        formatedParentNum = "";
        $(`${isMweb ? ".mweb-valid-icon" : ".valid-icon"}`).css(
          "display",
          "none"
        );
        // if (!e.target.value.length) {
        customCssMethod(".err-msg-pm", "display", "none");
        customClassMethod(".parent-num", false, "error-state");
        customClassMethod(".parent-num-dropdown", false, "error-state");
        customClassMethod(".parent-mobile-num", false, "error-state");
        // }
      });
    },
  });
})();

(function () {
  $(".parent-mobile-num").keypress(function (e) {
    var charCode = e.which ? e.which : event.keyCode;

    if (String.fromCharCode(charCode).match(/[^0-9]/g)) return false;
  });
})();

const subjPreSelect = () => {
  const url = window.location.href;
  const subjects = {
    math: "math",
    code: "coding",
    music: "music",
    musicplus: "music_for_all",
    home: "coding",
  };
  subj = Object.keys(subjects).filter((subject) => url.includes(subject));
  if (subj.length > 1) {
    selectedSubj = subjects[subj[1]];
    selectedGrade = "8";
  } else {
    selectedSubj = subjects[subj];
  }
  if (!selectedSubj) {
    selectedSubj = "coding";
  }
};

$(`${isMweb ? ".mweb-schedule-cta" : ".schedule-cta"}`).click((e) => {
  // book a free trail cta

  window.WHJR_ANALYTICS.trackEvent("Book a class clicked", {
    position: e.currentTarget.id,
  });

  if (!isSidePanelOpen) {
    isSidePanelOpen = true;

    window.WHJR_ANALYTICS.trackEvent("viewed registration form", {
      grade: selectedGrade,
    });
  }

  subjPreSelect();
  $(`.${selectedSubj.split("_")[0]}-block`).addClass("active-state");
  if (selectedSubj == "music_for_all") {
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "none"
    );
  } else {
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "block"
    );
  }

  customCssMethod(
    ".music-state",
    "display",
    selectedSubj.includes("music") ? "block" : "none"
  );

  getGradeBlocks();

  $(".parent-mobile-num").val(formatedParentNum); // mobile-input field

  sendEventsHOF({
    eventName: "REGISTRATION_INIT",
    eventSource: eventSource,
    s3SchemaName: "deviceType",
  });

  if (parentMobileNum && selectedGrade) {
    if (!checkValidNum(parentMobileNum)) return;
    if (!isMweb) {
      $(".sp-initial-cta").click();
    } else {
      $(".mweb-sp-initial-cta").click();
    }
  } else {
    if (!isMweb) {
      customCssMethod(".sidepanel-container", "display", "block");
    } else {
      customCssMethod(".m-web-side-pannel", "display", "block");
      customCssMethod("body", "overflow", "hidden");
      customCssMethod(".mweb-banner-form", "display", "none");
    }
  }
  customCssMethod("body", "overflow", "hidden");
  window.scrollTo(0, 0);
});

const getGradeBlocks = () => {
  //grades will vary by subject, this method will structure the grades by selected subject
  const subjGrades = {
    music: ["1", "2-3", "4-6", "7-9", "10-12"],
    math: [1, 2, 3, 4, 5, 6, 7, 8],
    coding: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };
  $(
    `${isMweb ? ".mweb-child-grade-blk-copy" : ".child-grade-blk-copy"}`
  ).empty();

  subjGrades[selectedSubj.split("_")[0]]?.map((grade, index) => {
    const element = `<div id="grade-${grade}" class="grade-block-${
      isMweb ? "mweb" : "web"
    } grade-card-sp  ${isMweb ? "mweb-" : ""}grade-${
      selectedSubj.split("_")[0]
    }  ${isMweb ? "mweb-" : ""}grade-${grade}"><p class="grade-label"> ${
      selectedSubj.split("_")[0] == "music" && index > 0 ? "Grades" : "Grade"
    }</p><p class="grade-num">${grade}</p></div>`;

    $(
      `${isMweb ? ".mweb-child-grade-blk-copy" : ".child-grade-blk-copy"}`
    ).append(element);
    customClassMethod(
      `.${isMweb ? "mweb-" : ""}grade-${selectedGrade}`,
      true,
      "active-state"
    );
  });

  $(`${isMweb ? ".grade-block-mweb" : ".grade-block-web"}`).click((e) => {
    // side-pannel grade block card click method
    selectedGrade = e.target.id.split("-").slice(-1)[0];
    customClassMethod(
      `${isMweb ? ".grade-block-mweb" : ".grade-block-web"}`,
      false,
      "active-state"
    );
    if (selectedSubj.includes("music")) {
      const musicGrade = e.target.id.split("-");
      customClassMethod(
        `.${isMweb ? "mweb-" : ""}grade-${musicGrade[1]}-${musicGrade[2]}`,
        true,
        "active-state"
      );
    }
    customClassMethod(
      `.${isMweb ? "mweb-" : ""}grade-${selectedGrade}`,
      true,
      "active-state"
    );
    enableScheduleCta();

    window.WHJR_ANALYTICS.trackEvent("Grade Selected", {
      grade: selectedGrade,
    });
  });
};

$(".grade-home").click((e) => {
  selectedGrade = e.target.id.split("-").slice(-1)[0];
  $(".grade-home").removeClass("active-state");
  $(`#${e.target.id}`).addClass("active-state");

  window.WHJR_ANALYTICS.trackEvent("Grade Selected", {
    grade: selectedGrade,
  });
});

$(".redirect-login").click((e) => {
  window.WHJR_ANALYTICS.trackEvent("Login clicked", {
    position: e.target.id,
  });
});

getGradeBlocks();

$(".subject-card-sp").click((e) => {
  // side-panel subject card click method
  $(".subject-card-sp").removeClass("active-state");
  const id = e.target.id;
  $(`.${id}-block`).addClass("active-state");
  selectedSubj = id;
  customCssMethod(".music-state", "display", id == "music" ? "block" : "none");
  getGradeBlocks();
  $(`${isMweb ? ".grade-block-mweb" : ".grade-block-web"}`).removeClass(
    "active-state"
  );

  selectedGrade = "";

  if (selectedSubj != "music") {
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "block"
    );
    $(".parent-mail-label").text("PARENT'S MOBILE NUMBER");
  } else {
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      isMusicKids ? "block" : "none"
    );
    selectedGrade = isMusicKids ? "" : "8";
    $(".parent-mail-label").text( isMusicKids ?  "PARENT'S MOBILE NUMBER" : "ENTER YOUR MOBILE NUMBER");

  }
  enableScheduleCta();

  window.WHJR_ANALYTICS.trackEvent("Course Selected", {
    course_type: selectedSubj,
  });
});

const isExist = () => {
  $.ajax({
    type: "POST",
    url: `${PROD_BASE_URL}/api/V1/userDetail/existByEmailOrMobile?timezone=${timeZone}&regionId=${country}&brandId=byju&timestamp=${new Date().getTime()}`,
    cache: false,
    data: { mobile: parentMobileNum, dialCode },

    success: function (res) {
      isUserExist = res.data.isExist;
      window.WHJR_ANALYTICS.trackEvent("Mobile entered", {
        position: isSidePanelOpen ? "side_panel" : "on_page_form",
        is_mobile: true,
        user_type: isUserExist ? "old" : "new",
      });
    },
  });
};

const checkValidNum = (val) => {
  const valid = val.length === 10 && $.isNumeric(val);

  customCssMethod(".err-msg-pm", "display", valid ? "none" : "block");
  customClassMethod(".parent-num", !valid, "error-state");
  customClassMethod(".parent-num-dropdown", !valid, "error-state");
  customClassMethod(".parent-mobile-num", !valid, "error-state");

  customClassMethod(".parent-num", valid, "active-field");
  customClassMethod(".parent-num-dropdown", valid, "active-field");
  $(`${isMweb ? ".mweb-valid-icon" : ".valid-icon"}`).css(
    "display",
    valid ? "block" : "none"
  );

  return valid;
};

$(".parent-mobile-num").on("input", (e) => {
  $(".parent-mail").removeClass("parent-mobile-sp-number");

  if (dialCode == "+1") {
    const input = e.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      e.target.value = `(${areaCode}) ${middle} - ${last}`;
    } else if (input.length > 3) {
      e.target.value = `(${areaCode}) ${middle}`;
    } else if (input.length > 0) {
      e.target.value = `(${areaCode}`;
    }

    const val = e.target.value;
    parentMobileNum = `${val.substring(1, 4)}${val.substring(
      6,
      9
    )}${val.substring(12, 16)}`;
    formatedParentNum = e.target.value;
    if (e.target.value.length > 15) {
      isExist();
      sendEventsHOF({
        eventName: "MOBILE_ENTERED",
        eventSource: eventSource,
        s3SchemaName: "deviceType",
        n1: +dialCode,
      });
    }
  } else {
    // checkValidNum(e.target.value);
    parentMobileNum = e.target.value;
    formatedParentNum = e.target.value;
    if (e.target.value.length > 9) {
      isExist();
      sendEventsHOF({
        eventName: "MOBILE_ENTERED",
        eventSource: eventSource,
        s3SchemaName: "deviceType",
        n1: +dialCode,
      });
    }
  }
  checkValidNum(parentMobileNum);
  if (!e.target.value.length) {
    customCssMethod(".err-msg-pm", "display", "none");
    customClassMethod(".parent-num", false, "error-state");
    customClassMethod(".parent-num-dropdown", false, "error-state");
    customClassMethod(".parent-mobile-num", false, "error-state");
    $(".parent-mail").addClass("parent-mobile-sp-number");
  }

  if (studentDetails) {
    selectedGrade = "";
    otpValue = "";
    selectedSubj = "";
    isUserAuthenticated = false;
    $(".subject-card-sp").removeClass("active-state");
    $(`${isMweb ? ".grade-block-mweb" : ".grade-block-web"}`).removeClass(
      "active-state"
    );
    $(".subject-card-sp").removeClass("disabled");
    $(
      `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
    ).css("display", "none");
    $(".music-state").css("display", "none");
  }
  enableScheduleCta();
});

const enableScheduleCta = () => {
  if (parentMobileNum.length === 10 && !!selectedGrade && !!selectedSubj) {
    $(`${isMweb ? ".mweb-sp-initial-cta" : ".sp-initial-cta"}`).removeClass(
      "disabled"
    );
  } else {
    $(`${isMweb ? ".mweb-sp-initial-cta" : ".sp-initial-cta"}`).addClass(
      "disabled"
    );
  }
};

$(`${isMweb ? ".mweb-sp-initial-cta" : ".sp-initial-cta"}`).click(() => {
  // side-panel initial form cta
  $(".form-loader").css("display", "block");
  $(
    `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
  ).css("display", "none");

  if (isUserAuthenticated) {
    handleMecall();
  } else {
    window.WHJR_ANALYTICS.trackEvent("Verification OTP Initiated", {});
    getOtp(spInitialCtaSuccess);
    $(
      `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
    ).css("display", "none");
    $(".otp-input-box").val("");
  }
});

$(".ismusicfor").click((e) => {
  // toggle for music kids r adults
  isMusicKids = e.currentTarget.children[1].id.includes("kids");
  if (!isMusicKids) {
    selectedSubj = "music_for_all";
    selectedGrade = "8";
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "none"
    );
    $(".parent-mail-label").text("ENTER YOUR MOBILE NUMBER");
  } else {
    selectedSubj = "music";
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "block"
    );
    $(".parent-mail-label").text("PARENT'S MOBILE NUMBER");
    selectedGrade = "";
    $(`${isMweb ? ".grade-block-mweb" : ".grade-block-web"}`).removeClass(
      "active-state"
    );
  }
  musicRadioClass();
  enableScheduleCta();
});

const spInitialCtaSuccess = (res) => {
  // if(!isMweb){
  $(`${isMweb ? ".mweb-otp-user-exist-msg" : ".otp-user-exist-msg"}`).css(
    "display",
    isUserExist ? "flex" : "none"
  );
  // }
  $(".sp-initial-form").css("display", "none");
  $(".form-loader").css("display", "none");
  $(`${isMweb ? ".mweb-otp-container" : ".otp-container"}`).css(
    "display",
    "block"
  );
  $(".otp-heading").text(
    isUserExist ? "Enter the 4-digit code to login" : "Enter the 4-digit code"
  );
  $(".jss123").css("caret-color", "black");
  // $(".otp-message").text(
  //   isUserExist ? "Login using OTP sent to" : "OTP sent to "
  // );
  $(".otp-message").text("OTP sent to ");
  otpTimer();
  $(".selected-num-display").text(`${dialCode} ${formatedParentNum}`);

  if (parentMobileNum && selectedGrade) {
    customCssMethod(
      `${isMweb ? ".m-web-side-pannel" : ".sidepanel-container"}`,
      "display",
      "block"
    );
  }
  challengeCodeForOtp = res.data.challenge;

  window.WHJR_ANALYTICS.trackEvent("Verification pop up viewed", {});

  otpSentCount+=1

  sendEventsHOF({
    eventName: `OTP_SEND_${otpSentCount}`,
    eventSource: eventSource,
    s3SchemaName: "deviceType",
    n1: +dialCode,
  });
};

const otpTimer = () => {
  var timer = 15;
  $(".resend-otp").css("display", "none");

  timeInterval = setInterval(() => {
    $(".resend-otp-msg").text(`Didn’t recieve the code? Retry after ${timer}`);
    timer -= 1;
    if (timer <= 0) {
      clearInterval(timeInterval);
      $(".resend-otp-msg").text(`Didn’t recieve the code?`);
      $(".resend-otp").css("display", "block");
    }
  }, 1000);
};

const getOtp = (callback, isResend) => {
  const url = isUserExist
    ? `${PROD_BASE_URL}/api/V1/users/sendStudentVerificationCode?timezone=${timeZone}&regionId=${country}&brandId=byju&timestamp=${new Date().getTime()}`
    : `${PROD_BASE_URL}/api/V1/otp/generate?regionId=${country}&timezone=${timeZone}&brandId=byju&timestamp=${new Date().getTime()}`;

  $.ajax({
    type: "POST",
    url,
    cache: false,
    data: {
      dialCode,
      ...(!isUserExist && { mobile: parentMobileNum }),
      ...(isUserExist && { emailOrMobile: parentMobileNum }),
      ...(isResend && { type: "voice" }),
    },

    success: callback,
    error: () => {
      $(".form-loader").css("display", "none");
      Toastify({
        text: "Something went wrong.Please try again later!",
        duration: 5000,
      }).showToast();
    },
  });
};

$(".resend-otp").click(() => {
  window.WHJR_ANALYTICS.trackPageView("Resend Code clicked", {});
  getOtp(spInitialCtaSuccess, true);
  $(".otp-input-box").val("");
});

$(".mweb-otp-close").click(() => {
  $(".mweb-otp-container").css("display", "none");
  clearInterval(timeInterval);
});

$(".otp-input-box").on("input", (e) => {
  // verify-otp
  $(`div.otp-box`).removeClass("orange isError focus blink");
  $(`div.otp-box:nth-child(${e.target.value.length + 3})`).addClass("blink");
  $(".otp-box:nth-child(1)").focus();
  $(".jss123").css("caret-color", "black");

  for (let i = 2; i < e.target.value.length + 2; i++) {
    $(`div.otp-box:nth-child(${i})`).addClass("orange focus");
  }

  if (e.target.value.length >= 4) {
    otpValue = e.target.value;
    $(".jss123").css("caret-color", "transparent");

    $(".otp-loader").css("display", "block");

    window.WHJR_ANALYTICS.trackEvent("Verification code entered", {});

    const url = isUserExist
      ? `${PROD_BASE_URL}/api/V1/users/authenticateVerificationCode?timezone=${timeZone}&_vercel_no_cache=1&regionId=${country}&brandId=byju&timestamp=${new Date().getTime()}`
      : `${PROD_BASE_URL}/api/V1/otp/verify?timezone=${timeZone}&regionId=${country}&brandId=byju&timestamp=${new Date().getTime()}`;
    $.ajax({
      type: "POST",
      url: url,
      cache: false,
      data: {
        dialCode,
        ...(!isUserExist && { mobile: parentMobileNum }),
        ...(isUserExist && { emailOrMobile: parentMobileNum }),
        ...(!isUserExist && { otp: otpValue }),
        ...(isUserExist && { token: otpValue }),
        ...(isUserExist && { challenge: challengeCodeForOtp }),
      },

      success: function (res) {
        clearInterval(timeInterval);
        isUserAuthenticated = true;

        if (!isUserExist) {
          handleRegisterUser();
        } else {
          token = res.data.token;
          handleMecall();
        }

        const student = res.data;

        window.WHJR_ANALYTICS.trackEvent(
          isUserExist ? "Login success frontend" : "Signed up frontend",
          {}
        );

        sendEventsHOF({
          eventName: `OTP_VERIFICATION_SUCCESS`,
          eventSource: eventSource,
          s3SchemaName: "deviceType",
          n1: +dialCode,
        });



      },
      error: function (err) {
        $(".otp-box").addClass("isError");
        $(".otp-err").css("display", "block");
        $(".otp-loader").css("display", "none");
        $(".otp-input-box").val("");

        otpFailureCount += 1

        sendEventsHOF({
          eventName: `OTP_FAILURE_${otpFailureCount}`,
          eventSource: eventSource,
          s3SchemaName: "deviceType",
          n1: +dialCode,
        });

        console.log(err);
        Toastify({
          text: "Invalid OTP. Please try again",
          duration: 5000,
        }).showToast();

        window.WHJR_ANALYTICS.trackEvent(
          isUserExist ? "Login error frontend" : "Verification OTP Failure",
          {}
        );
      },
    });
  }
});

//for adding checked class to radio manually, due to webflow inconsistent behaviour
const musicSubCatRadioClass = () => {
  
  const pnoClass = isMweb ? ".radio-pno-mweb" : ".radio-pno-web";
  const gtrClass = isMweb ? ".radio-gtr-mweb" : ".radio-gtr-web";
if(courseSubType == "PNO"){
  $(pnoClass).children("div").addClass("w--redirected-checked");
  $(gtrClass).children("div").removeClass("w--redirected-checked");
}else{

  $(pnoClass).children("div").removeClass("w--redirected-checked");
  $(gtrClass).children("div").addClass("w--redirected-checked");
}
}

const musicRadioClass = () => {
  if(!selectedSubj.includes('music')) return;

  const kidClass = isMweb ? ".music-kid-mweb" : ".music-kid-web";
  const adultClass = isMweb ? ".music-adult-mweb" : ".music-adult-web";

  if (selectedSubj == "music") {
    $(kidClass).children("div").addClass("w--redirected-checked");
    $(adultClass).children("div").removeClass("w--redirected-checked");
  } else {
    $(kidClass).children("div").removeClass("w--redirected-checked");
    $(adultClass).children("div").addClass("w--redirected-checked");
  }

};

const handleUserPropsAnalytics = (student) => {
  window.WHJR_ANALYTICS.setUserProps({
    userId: student.id,
    trial_status: student.trialStatus,
    user_dial_code: student.dialCode,
    user_mobile: student.mobile,
    user_is_laptop: student.isLaptop,
    user_grade: student.grade,
    user_email: student.email,
    tracking_code: "",
  });
  window.WHJR_ANALYTICS.trackUser(student.id);
};

const handleRegisterUser = () => {
  $.ajax({
    type: "POST",
    url: `${PROD_BASE_URL}/api/V1/trial/users/minimalFieldRegister?timezone=${timeZone}&courseType=${selectedSubj.toUpperCase()}&isMobilePlatform=false&brandId=byju&timestamp=${new Date().getTime()}`,
    cache: false,
    data: {
      mobile: parentMobileNum,
      grade: selectedGrade,
      isLaptop: "1",
      dialCode: dialCode,
      countryCode: dialCodeCountry,
      timezone: timeZone,
      ...(selectedSubj.includes("music") && { courseSubType: courseSubType }),
    },

    success: function (res) {
      token = res.data.token;
      handleMecall();
      handleGetSlots();
      sendEventsHOF({
        eventName: "REGISTRATION_SUCCESS",
        eventSource: eventSource,
        s3SchemaName: "deviceType",
        n1: +dialCode,
      });

      const student = res.data.students[0];
    },
    error: function (err) {
      $(".otp-loader").css("display", "none");

      Toastify({
        text: err.responseJSON.error.message,
        duration: 5000,
      }).showToast();
    },
  });
};

const handleMecall = () => {
  $.ajax({
    type: "GET",
    url: `${PROD_BASE_URL}/api/V1/userDetail/me?timezone=${timeZone}&brandId=byju&timestamp=${new Date().getTime()}`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      studentDetails = res.data;

      handleUserPropsAnalytics(studentDetails.students[0]);

      const errStatements = {
        not_scheduled: "",
        pre_trial: `You have already booked a trial class for ${
          selectedSubj == "music_for_all"
            ? "MUSIC ADULTS"
            : selectedSubj.toUpperCase()
        }. Go to dashboard to manage your prior bookings.`,
        post_trial: `You have already attended a trial class for ${
          selectedSubj == "music_for_all"
            ? "MUSIC ADULTS"
            : selectedSubj.toUpperCase()
        }. Open dashboard to view your bookings`,
        paid: `You have already attended a trial class for ${
          selectedSubj == "music_for_all"
            ? "MUSIC ADULTS"
            : selectedSubj.toUpperCase()
        }. Open dashboard to view your bookings`,
      };

      const trailStatus = studentDetails.students[0].student_courses.filter(
        (course) => course.courseType === selectedSubj.toUpperCase()
      );
      $(".form-loader").css("display", "none");

      if (trailStatus[0] && trailStatus[0].trialStatus !== "not_scheduled") {
        $(`${isMweb ? ".mweb-otp-container" : ".otp-container"}`).css(
          "display",
          "none"
        );
        $(`${isMweb ? ".mweb-otp-user-exist-msg" : ".otp-user-exist-msg"}`).css(
          "display",
          "none"
        );
        $(`${isMweb ? ".mweb-initial-form" : ".sp-initial-form"}`).css(
          "display",
          "block"
        );
        $(
          `${
            isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"
          }`
        ).css("display", "flex");
        $(".subject-card-sp").removeClass("active-state");

        $(
          `${isMweb ? ".mweb-registered-user-msg" : ".registered-user-msg"}`
        ).text(errStatements[trailStatus[0].trialStatus]);
        studentDetails.students[0].student_courses.map((course) => {
          $(`.${course.courseType.toLowerCase()}-block`).removeClass(
            "disabled"
          );
          if (course.trialStatus != "not_scheduled") {
            $(`.${course.courseType.toLowerCase()}-block`).addClass("disabled");
          }
        });
        $(".otp-loader").css("display", "none");
        $(".otp-input").val("");
        $(`${isMweb ? ".grade-block-mweb" : ".grade-block-web"}`).removeClass(
          "active-state"
        );
        $(".music-state").css("display", "none");

        handleGetDashboardLink();

        if (trailStatus[0].trailStatus === "pre_trial") {
          window.WHJR_ANALYTICS.trackEvent("Trial already booked", {});
        }
      } else {
        handleGetSlots();
      }
    },
    error: function (err) {
      Toastify({
        text: err.responseJSON.error.message,
        duration: 5000,
      }).showToast();
    },
  });
};

$(".radio-music-sc").click((e) => {
  // toggle for music sub-cat
  e.stopPropagation();
  const musicType = e.currentTarget.children.radio.id
    .split("-")[1]
    .toUpperCase();
  courseSubType = musicType;
  handleUpdateCourseSubType();
  handleGetSlots();
  musicSubCatRadioClass()



  window.WHJR_ANALYTICS.trackEvent("Booking Instrument Selected", {
    instrument_selected: musicType,
  });
});

const handleUpdateCourseSubType = () => {
    $.ajax({
      type: "POST",
      url: `${PROD_BASE_URL}/api/V1/students/updateTrialCourse?timezone=${timeZone}&regionId=${country}&courseType=${selectedSubj.toUpperCase()}&brandId=byju&timestamp=${new Date().getTime()}`,
      cache: false,
      data: {
        courseType: selectedSubj.toUpperCase(),
        studentId: studentDetails.students[0]?.id,
        grade: selectedGrade,
        courseSubType: courseSubType,
      },
      headers: {
        authorization: `Bearer ${token}`,
      },

      success: function (res) {
        console.log(res.data)
      },
      error: function (err) {
        Toastify({
          text: err.responseJSON.error.message,
          duration: 5000,
        }).showToast();
      },
    });
}

const handleGetSlots = () => {
  // let loading = true
  // if(!loading)
  $(".slot-loader").css("display", "block");

  $.ajax({
    type: "GET",
    url: `${PROD_BASE_URL}/api/V1/trial/slots/get?countryCode=${dialCodeCountry}&regionId=${country}&grade=${selectedGrade}&timezone=${timeZone}&brandId=byju&courseType=${selectedSubj.toUpperCase()}&timestamp=${new Date().getTime()}${
      selectedSubj.includes("music") ? "&courseSubType=" + courseSubType : ""
    }`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      slotsData = res.data.slots;
      handleDateBlockStructure();
      clearInterval(timeInterval);
      handleGetTimezonesList();
      $(".otp-loader").css("display", "none");
      $(`${isMweb ? ".mweb-timezone-value" : ".timezone-value"}`).text(
        timeZone
      );
      $(".slot-loader").css("display", "none");
      $(`${isMweb ? ".mweb-otp-user-exist-msg" : ".otp-user-exist-msg"}`).css(
        "display",
        "none"
      );
      $(
        `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
      ).css("display", "none");
      musicSubCatRadioClass();
      if (isMweb) {
        $(".mweb-otp-container").css("display", "none");
        $(".mweb-initial-form").css("display", "none");
        $(".mweb-slot-container").css("display", "block");
        // $(".mweb-sp-slot-cta").addClass("disabled");
        $(".mweb-music-sub-cat").css(
          "display",
          selectedSubj.includes("music") ? "block" : "none"
        );

      } else {
        $(".otp-container").css("display", "none");
        $(`${isMweb ? ".mweb-initial-form" : ".sp-initial-form"}`).css(
          "display",
          "none"
        );
        $(".side-panel-slot").css("display", "block");
        $(".music-sub-cat").css(
          "display",
          selectedSubj.includes("music") ? "block" : "none"
        );
      }

    },
    error: function (err) {
      Toastify({
        text: err.responseJSON.error.message,
        duration: 5000,
      }).showToast();
    },
  });
};

const handleDateBlockStructure = () => {
  $(".date-block-container").empty();
  const allDataBlocks = slotsData.map((date, index) => {
    let dateBlock =
      '<div class="date-block date-' +
      index +
      ' " id="date-' +
      index +
      '" ><p class="day-label">' +
      moment.tz(date.date, timeZone).format("ddd") +
      '</p><p class="date-label">' +
      moment.tz(date.date, timeZone).format("DD") +
      '</p><p class="month-label">' +
      moment.tz(date.date, timeZone).format("MMM") +
      "</p></div>";

    $(".date-block-container").append(dateBlock);
  });
  handleAddEventTODateBlock();
};

const handleAddEventTODateBlock = () => {
  $(".date-block").click((e) => {
    // date-block cta
    const id = e.target.id.split("-").slice(-1)[0];
    onDateBlockClick(id);

    const selectedDateBlock = slotsData[id].date;

    window.WHJR_ANALYTICS.trackEvent("Booking Day Clicked", {
      slot_date: moment.tz(selectedDateBlock,timeZone).format("ddd"),
      day_position: id,
      timezone: timeZone,
    });
  });
  onDateBlockClick(0);
};

const onDateBlockClick = (id) => {
  $(".date-block").removeClass("active-state");
  $(".day-label").removeClass("active-state");
  $(".month-label").removeClass("active-state");
  $(".date-" + id).addClass("active-state");
  $(".date-" + id + " div .day-label").addClass("active-state");
  $(".date-" + id + " div .month-label").addClass("active-state");
  selectedDateIndex = id;
  getSlotsOnSelectedate();
};

const getSlotsOnSelectedate = () => {
  $(".slots-container").empty();
  let isSlotSelected = true;
  slotsData[selectedDateIndex].slots.map((slot, index) => {
    // const isSlotAvail = slot.teacherCount > 0 ? "" : "disable";
    const slotEle =
      '<div id="slot-' +
      index +
      '" class="slot-block-card slot-' +
      index +
      '"><p class="slot-time">' +
      moment.tz(slot.startTime,timeZone).format("LT") +
      "</p></div>";

    if (slot.teacherCount) {
      $(".slots-container").append(slotEle);
      // for preselect of 1st slot
      if (isSlotSelected) {
        $(".slot-" + index).addClass("active-state");
        selectedTimeSlot = index;
        isSlotSelected = false;
        $(".slot-time-msg").text(
          `${moment.tz(
            slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime,timeZone
          ).format("LT")} `
        );
        const selectedDateBlock = slotsData[selectedDateIndex].date;
        $(".slot-date-msg").text(
          `${moment.tz(selectedDateBlock,timeZone).format("ddd")}, ${moment.tz(
            selectedDateBlock, timeZone
          ).format("DD")} ${moment.tz(selectedDateBlock,timeZone).format("MMM")}`
        );

        window.WHJR_ANALYTICS.trackEvent("Viewed Slot Screen", {
          is_slot_preselected: true,
          preselected_slot_time: moment.tz(
            slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime,timeZone
          ).format("LT"),
          preselected_slot_date: moment.tz(selectedDateBlock,timeZone).format("ddd"),
          preselected_slot_timezone: timeZone,
        });
      }
    }
  });

  $(".slot-block-card").click((e) => {
    // slot-block cta
    $(".slot-block-card").removeClass("active-state");
    id = e.target.id.split("-").slice(-1)[0];
    $(".slot-" + id).addClass("active-state");
    selectedTimeSlot = id;
    // $(".mweb-sp-slot-cta").removeClass("disabled");
    // $(".confirm-slot-cta").removeClass("disabled");
    $(".slot-time-msg").text(
      `${moment.tz(
        slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime,timeZone
      ).format("LT")} `
    );
    const selectedDateBlock = slotsData[selectedDateIndex].date;
    $(".slot-date-msg").text(
      `${moment.tz(selectedDateBlock,timeZone).format("ddd")}, ${moment.tz(
        selectedDateBlock,timeZone
      ).format("DD")} ${moment.tz(selectedDateBlock,timeZone).format("MMM")}`
    );

    window.WHJR_ANALYTICS.trackEvent("Booking Time Selected", {
      slot_time: moment.tz(
        slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime, timeZone
      ).format("LT"),
      slot_date: moment.tz(selectedDateBlock,timeZone).format("ddd"),
      time_position: selectedDateIndex,
      timezone: timeZone,
    });
  });
};

$(".mweb-sp-slot-cta").click(() => {
  // confirm slot cta for web
  handleBookSlot();
});

$(".confirm-slot-cta").click(() => {
  // confirm slot cta mweb
  handleBookSlot();
});

const handleBookSlot = () => {
  const startTime =
    slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime;
  $(".slot-loader").css("display", "block");

  window.WHJR_ANALYTICS.trackEvent("Confirm class time clicked", {
    slot_date: moment.tz(startTime,timeZone).format("ddd"),
    slot_time: moment.tz(startTime,timeZone).format("LT"),
  });
  $.ajax({
    type: "POST",
    url: `${PROD_BASE_URL}/api/V1/trial/slots/book?timezone=${timeZone}&regionId=${country}&brandId=byju&timestamp=${new Date().getTime()}&courseType=${selectedSubj.toUpperCase()}${
      selectedSubj.includes("music") ? `&courseSubType=${courseSubType}` : ""
    }`,
    cache: false,
    data: {
      countryCode: dialCodeCountry,
      slot: {
        startTime: startTime,
        endTime: moment.tz(startTime).add(1, "hours").toISOString(),
      },
      courseType: selectedSubj.toUpperCase(),
      studentId: studentDetails.students[0]?.id,
      grade: selectedGrade,
      timeZone: timeZone,
      ...(selectedSubj.includes("music") && { courseSubType: courseSubType }),
    },
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      $(".slot-loader").css("display", "none");
      handleGetDashboardLink(true); // true - after booking slot
      // sendEventsHOF({
      //   eventName: "TRAIL_SLOT_BOOKED",
      //   eventSource: eventSource,
      //   s3SchemaName: "deviceType",
      //   n1: +dialCode,
      // });

      window.WHJR_ANALYTICS.trackEvent("Trial Booking Confirmed frontend", {
        slot_date: moment.tz(startTime, timeZone).format("ddd"),
        slot_time: moment.tz(startTime, timeZone).format("LT"),
        timezone: timeZone,
      });
    },
    error: function (err) {
      $(".slot-loader").css("display", "none");

      Toastify({
        text: err.responseJSON.error.message,
        duration: 5000,
      }).showToast();
    },
  });
};

const handleGetDashboardLink = (bookedSlot) => {
  $.ajax({
    type: "GET",
    url: `${PROD_BASE_URL}/api/V1/students/${studentDetails.students[0].id}/getDashbordLink?timezone=${timeZone}&brandId=byju&courseType=${selectedSubj}&timestamp=${new Date().getTime()}`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      dashboardLink = res.data.url;
      $(".slot-loader").css("display", "none");

      if (bookedSlot) {
        const subjects = {
          math: "math",
          coding: "code",
          music: "music",
          music_for_all: "musicplus",
        };
        window.location.href = `https://code.byjusfutureschool.com/s/trial/success?jwt_token=${token}`;
        handleReset();
        if (isMweb) {
          $(".mweb-slot-container").css("display", "none");
          $(".mweb-initial-form").css("display", "block");
          $(".m-web-side-pannel").css("display", "none");
          customCssMethod(".mweb-banner-form", "display", "block");
        } else {
          $(".sidepannel-close").click();
        }
      }
    },
    error: function (err) {
      Toastify({
        text: err.responseJSON.error.message,
        duration: 5000,
      }).showToast();
    },
    async: false,
  });
};

$(`${!isMweb ? ".web-dashboard-redirection" : ".dashboard-redirection"}`).click(
  () => {
    window.open(dashboardLink, "_blank");
  }
);

const handleReset = () => {
  selectedGrade = "";
  otpValue = "";
  selectedSubj = "";
  parentMobileNum = "";
  formatedParentNum = "";
  isSidePanelOpen = false;
  $(".parent-mail-label").text( window.location.href.includes('musicplus') ? "ENTER YOUR MOBILE NUMBER" :  "PARENT'S MOBILE NUMBER" );

  $(".subject-card-sp").removeClass("active-state");
  $(`${isMweb ? ".grade-block-mweb" : ".grade-block-web"}`).removeClass(
    "active-state"
  );
  $(".subject-card-sp").removeClass("disabled");
  $(`${isMweb ? ".mweb-otp-container" : ".otp-container"}`).css(
    "display",
    "none"
  );
  $(".side-panel-slot").css("display", "none");
  $(`${isMweb ? ".mweb-otp-user-exist-msg" : ".otp-user-exist-msg"}`).css(
    "display",
    "none"
  );
  $(".sp-initial-form").css("display", "block");
  clearInterval(timeInterval);
  $(".music-state").css("display", "none");
  $(`${isMweb ? ".mweb-sp-initial-cta" : ".sp-initial-cta"}`).addClass(
    "disabled"
  );
  $(".radio-music-none").css("display", "block");
  $(".grade-container").css("display", "block");
  $(`${isMweb ? ".mweb-valid-icon" : ".valid-icon"}`).css("display", "none");
  $(".parent-mobile-num").val("");
  $(".grade-home").removeClass("active-state");

  $(".mweb-parent-mail-input").val(""); // main page form mobile number
  $("body").css("overflow", "auto");
  $(".parent-mail").addClass("parent-mobile-sp-number");

  customClassMethod(".parent-num", false, "error-state");
  customClassMethod(".parent-num-dropdown", false, "error-state");
  customClassMethod(".parent-mobile-num", false, "error-state");

  customClassMethod(".parent-num", false, "active-field");
  customClassMethod(".parent-num-dropdown", false, "active-field");

  $(".err-msg-pm").css("display", "none");
};

$(".sidepannel-close").click(() => {
  customCssMethod("body", "overflow", "auto");
  customCssMethod(".sidepanel-container", "display", "none");
  handleReset();
  customCssMethod(
    `${isMweb ? ".mweb-otp-user-exist-msg" : ".otp-user-exist-msg"}`,
    "display",
    "none"
  );
  isSidePanelOpen = false;
});

$(".mweb-back-arrow").click(() => {
  musicRadioClass()
  if ($(".mweb-slot-container").css("display") === "block") {
    $(".mweb-slot-container").css("display", "none");
    $(".mweb-initial-form").css("display", "block");
  } else if ($(".mweb-initial-form").css("display") === "block") {
    $(".m-web-side-pannel").css("display", "none");
    $("body").css("overflow", "auto");
    $(".mweb-banner-form").css("display", "block");
    handleReset();
  }
});

$(".web-back-arrow").click(() => {
  musicRadioClass()
  if ($(".side-panel-slot").css("display") === "block") {
    $(".sp-initial-form").css("display", "block");
    $(".side-panel-slot").css("display", "none");
  }
});

$(".otp-input-box").focus(function () {
  var that = this;
  setTimeout(function () {
    that.selectionStart = that.selectionEnd = 3;
  }, 0);
});

$(".timezone-value-container").click(() => {
  $(".timezones-list").css("display", "block");
  getTimeZonesEmbedded();
});

$(".mweb-timezone-value-container").click(() => {
  $(".mweb-timezones-list").css("display", "block");
  getTimeZonesEmbedded();
});

const handleGetTimezonesList = () => {
  // $.ajax({
  //   type: "GET",
  //   url: `https://api.timezonedb.com/v2.1/list-time-zone?key=VOWU23FPD15G&format=json`,
  //   cache: false,
  //   success: function (res) {
  //     timezonesList = res.zones;
  //     getTimeZonesEmbedded();
  //   },
  // });
  timezonesList = moment.tz.names();
  getTimeZonesEmbedded();
};

const getTimeZonesEmbedded = (TZList = timezonesList) => {
  $(`${isMweb ? ".mweb-timezones-container" : ".timezones-container"}`).empty();
  let item;
  TZList.map((zone) => {
    // let zoneName = TIMEZONE_DATA[zone] && zone
    if (isMweb) {
      item = `<div class="mweb-timezone-item"><p  class="tz-name events-none">${
        zone
      }</p><p class="tz-gmt events-none">(GMT${moment.tz(zone).format('Z')})</p><div  class="mweb-checked-image events-none ${
        timeZone == zone.zoneName ? "" : "d-none"
      }"><img src="https://uploads-ssl.webflow.com/616e5b481c168d84b208db74/61889840cc7f1927bc91374a_Clickable.png" loading="lazy" alt=""></div></div>`;
    } else {
      item = `<div class="timezone-item">
          <p class="paragraph-50 events-none ">${zone}</p>
          <p class="paragraph-51 events-none ">(GMT${moment.tz(zone).format('Z')})</p>
          <div class="checked-image events-none ${
            timeZone == zone.zoneName ? "" : "d-none"
          } "><img src="https://uploads-ssl.webflow.com/616e5b481c168d84b208db74/61889840cc7f1927bc91374a_Clickable.png" loading="lazy" alt=""></div></div>`;
    }
    $(
      `${isMweb ? ".mweb-timezones-container" : ".timezones-container"}`
    ).append(item);
  });

  $(`${isMweb ? ".mweb-timezone-item" : ".timezone-item"}`).click((e) => {
    timeZone = e.target.children[0].innerText;
    $(`${isMweb ? ".mweb-timezones-list" : ".timezones-list"}`).css(
      "display",
      "none"
    );
    $(`${isMweb ? ".mweb-timezone-value" : ".timezone-value"}`).text(
      e.target.children[0].innerText
    );
    handleGetSlots();

    window.WHJR_ANALYTICS.trackEvent("Timezone Changed", {
      timezone: timeZone,
    });
  });
};

$(".timezone-close").click(() => {
  $(".mweb-timezones-list").css("display", "none");
});

const GMTOffset = (val) => {
  const hours = `0${Math.floor(val / 3600)}`.slice(-2);
  const mins = `0${Math.abs(val / 60) % 60}`.slice(-2);
  const sign = `${val}`.charAt() == "-" ? "" : "+";
  return `GMT${sign}${hours}:${mins}`;
};

$(`${isMweb ? ".mweb-search-timezone-input" : ".search-timezone-input"}`).on(
  //timezone search filter
  "input",
  (e) => {
    const val = e.target.value.toUpperCase();
    let tempTZList;
    if (val.length > 3) {
      tempTZList = timezonesList.filter(
        (item) => item.toUpperCase().indexOf(val) > -1
      );
    } else {
      tempTZList = timezonesList;
    }
    getTimeZonesEmbedded(tempTZList);
  }
);

const checkForDeviceType = (s3) => {
  if (s3 === "deviceType") {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile ? "mobile" : "desktop";
  } else {
    return s3;
  }
};

const sendEventsHOF = ({
  eventName,
  eventSource,
  s3 = null,
  s4 = null,
  s5 = null,
  s6 = null,
  tc = null,
  b1 = null,
  b2 = null,
  n1 = null,
  n2 = null,
  n3 = null,
  s3SchemaName,
  s4SchemaName,
  s5SchemaName,
  s6SchemaName,
}) => {
  let s3Val = checkForDeviceType(s3SchemaName);
  let userId =
    studentDetails?.students[0]?.student_courses[0]?.studentId || null;
  let eventDetails = {
    eventName: eventName,
    eventSource: eventSource,

    data: {
      s3: s3Val,
      s4,
      s5,
      s6,
      tc,
      b1,
      b2,
      n1,
      n2,
      n3,
      userId: userId,
      screenName: eventSource,
    },
    schema: {
      //don't use s1, its reserved for userId
      //don't use s2, its reserved ofr eventSource
      userId: "s1",
      screenName: "s2",
      [s3SchemaName || "s3"]: "s3",
      [s4SchemaName || "s4"]: "s4",
      [s5SchemaName || "s5"]: "s5",
      [s6SchemaName || "s6"]: "s6",
      tc: "tc",
      b1: "b1",
      b2: "b2",
      n1: "n1",
      n2: "n2",
      n3: "n3",
    },
  };
  if (s3SchemaName) {
    if (s3SchemaName === "deviceType") {
      eventDetails.data[s3SchemaName] = s3Val;
    } else {
      eventDetails.data[s3SchemaName] = s3;
    }
    delete eventDetails.data.s3;
  }
  if (s4SchemaName) {
    eventDetails.data[s4SchemaName] = s4;
    delete eventDetails.data.s4;
  }
  if (s5SchemaName) {
    eventDetails.data[s5SchemaName] = s5;
    delete eventDetails.data.s5;
  }
  if (s6SchemaName) {
    eventDetails.data[s6SchemaName] = s6;
    delete eventDetails.data.s6;
  }
  sendEvents(eventDetails);
};

const sendEvents = (eventDetails) => {
  $.ajax({
    type: "POST",
    url: `${PROD_BASE_URL}/api/V1/events/saveEvent?regionId=${country}&courseType=${selectedSubj}&brandId=byju&timestamp=${new Date().getTime()}`,
    cache: false,
    data: { ...eventDetails },
  });
};

// sendEventsHOF({
//   eventName: "LANDED",
//   eventSource: eventSource,
//   s3SchemaName: "deviceType",
// });
