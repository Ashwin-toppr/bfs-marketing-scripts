var dialCodesList,
  dialCode = "+1",
  country = "US",
  isMweb = window.screen.width < 500;

var STAG_BASE_URL = "https://stage-api.whjr.one";
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
  courseSubType = "GTR",
  timeInterval,
  isMusicKids = true,
  formatedParentNum;

//   for preselecting subj


  //side pannel code
  (function () {
    $.ajax({
      type: "GET",
      url: `${STAG_BASE_URL}/api/V1/geo/getInfo?_vercel_no_cache=1&courseType=${selectedSubj}&brandId=whitehatjr`,
      cache: false,
      success: function (res) {
        timeZone = res.data.timezone;
        country = res.data.countryIsoCode;
        console.log(res.data);
      },
    });
  }
)();

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
        }   dial-code w-dropdown-link" data-code='${
          item.dial_code
        }' tabindex="0">${item.flag} ${item.name} ${item.dial_code}</a>`;
        $(`${isMweb ? ".mweb-dial-codes-list" : ".dial-codes-list"}`).append(
          ele
        );
      });

      $(".dial-code").click((e) => {
        dialCode = e.target.dataset.code;
        $(
          `${isMweb ? ".mweb-dial-codes-list" : ".dial-codes-list"}`
        ).removeClass("w--open");
        $(".dial-code-value").text(dialCode);
        isUserAuthenticated = false;
        $(".parent-mobile-num").val("");
        parentMobileNum = "";
        formatedParentNum= "";
        $(`${isMweb ? ".mweb-valid-icon" : ".valid-icon"}`).css(
          "display", "none"
        );
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

const subjPreSelect =  () => {
  const url = window.location.href;
  const subjects = {
    math: "math",
    code: "coding",
    music: "music",
    musicplus: "music_for_all",
    home: "coding",
  };
  subj = Object.keys(subjects).filter((subject) => url.includes(subject));
  selectedSubj = subjects[subj];
  if(selectedSubj == 'music_for_all') selectedGrade = "8";
}

$(`${isMweb ? ".mweb-schedule-cta" : ".schedule-cta"}`).click(() => {
  subjPreSelect()
  $(`.${selectedSubj}-block`).addClass("active-state");
  $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
    "display",
    "block"
  );
  customCssMethod(".music-state", "display", selectedSubj == "music" ? "block" : "none");

  getGradeBlocks();

  $(".parent-mobile-num").val(formatedParentNum);

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
  const subjGrades = {
    music: ["1", "2-3", "4-6", "7-9", "10-12"],
    math: [1, 2, 3, 4, 5, 6, 7, 8],
    coding: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };
  $( `${isMweb ? '.mweb-child-grade-blk-copy':'.child-grade-blk-copy'}`).empty();

  subjGrades[selectedSubj]?.map((grade) => {
    const element = `<div id="grade-${grade}" class="grade-block-${isMweb ? 'mweb':'web'} grade-card-sp  ${
      isMweb ? "mweb-" : ""
    }grade-${selectedSubj}  ${
      isMweb ? "mweb-" : ""
    }grade-${grade}"><p class="grade-label">Grade</p><p class="grade-num">${grade}</p></div>`;

    $( `${isMweb ? '.mweb-child-grade-blk-copy':'.child-grade-blk-copy'}`).append(element);
    customClassMethod(
      `.${isMweb ? "mweb-" : ""}grade-${selectedGrade}`,
      true,
      "active-state"
    );
  });

  $(`${isMweb ? '.grade-block-mweb':'.grade-block-web'}`).click((e) => {
    selectedGrade = e.target.id.split("-").slice(-1)[0];
    customClassMethod(`${isMweb ? '.grade-block-mweb':'.grade-block-web'}`, false, "active-state");
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
  });
};

$(".grade-home").click((e) => {
  selectedGrade = e.target.id.split("-").slice(-1)[0];
  $(".grade-home").removeClass("active-state");
  $(`#${e.target.id}`).addClass("active-state");
});

getGradeBlocks();

$(".subject-card-sp").click((e) => {
  $(".subject-card-sp").removeClass("active-state");
  const id = e.target.id;
  $(`.${id}-block`).addClass("active-state");
  selectedSubj = id;
  customCssMethod(".music-state", "display", id == "music" ? "block" : "none");
  getGradeBlocks();
  $(`${isMweb ? '.grade-block-mweb':'.grade-block-web'}`).removeClass("active-state");

  selectedGrade = "";

  if (selectedSubj != "music") {
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "block"
    );
  } else {
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      isMusicKids ? "block" : "none"
    );
    selectedGrade = isMusicKids ? "" : "8";
  }
  enableScheduleCta();
});

const isExist = () => {
  $.ajax({
    type: "POST",
    url: `${STAG_BASE_URL}/api/V1/userDetail/existByEmailOrMobile?timezone=${timeZone}&regionId=${country}&courseType=${selectedSubj}&brandId=whitehatjr`,
    cache: false,
    data: { mobile: parentMobileNum, dialCode },

    success: function (res) {
      isUserExist = res.data.isExist;
    },
  });
};

const checkValidNum = (val) => {
  const valid = val.length === 10 && $.isNumeric(val);

  customCssMethod(".err-msg-pm", "display", valid ? "none" : "block");
  customClassMethod(".parent-num", !valid, "error-state");
  customClassMethod(".parent-num-dropdown", !valid, "error-state");
  customClassMethod(".parent-mobile-num", !valid, "error-state");

  customClassMethod(".parent-num", valid, "active-state");
  customClassMethod(".parent-num-dropdown", valid, "active-state");
  $(`${isMweb ? ".mweb-valid-icon" : ".valid-icon"}`).css(
    "display",
    valid ? "block" : "none"
  );

  return valid;
};

$(".parent-mobile-num").on("input", (e) => {
  $('.parent-mail').addClass('active-state')
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
    }
  } else {
    // checkValidNum(e.target.value);
    parentMobileNum = e.target.value;
    formatedParentNum = e.target.value;
    if (e.target.value.length > 9) {
      isExist();
    }
  }
  checkValidNum(parentMobileNum);

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
  $(".form-loader").css("display", "block");
  $(
    `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
  ).css("display", "none");

  if (isUserAuthenticated) {
    handleMecall();
  } else {
    getOtp(spInitialCtaSuccess);
    $(
      `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
    ).css("display", "none");
    $(".otp-input-box").val("");
  }
});

$(".ismusicfor").click((e) => {
  isMusicKids = e.currentTarget.children[1].id.includes("kids");
  if (!isMusicKids) {
    selectedSubj = "music_for_all";
    $(".radio-music-none").css("display", "none");
    selectedGrade = "8";
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "none"
    );
  } else {
    selectedSubj = "music";
    $(".radio-music-none").css("display", "block");
    $(`${isMweb ? ".mweb-grade-container" : ".grade-container"}`).css(
      "display",
      "block"
    );
    selectedGrade = "";
    $(`${isMweb ? '.grade-block-mweb':'.grade-block-web'}`).removeClass("active-state");
  }
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
    ? `${STAG_BASE_URL}/api/V1/users/sendStudentVerificationCode?timezone=${timeZone}&regionId=${country}&courseType=${selectedSubj}&brandId=whitehatjr&timestamp=`
    : `${STAG_BASE_URL}/api/V1/otp/generate?regionId=${country}&timezone=${timeZone}&courseType=${selectedSubj}&brandId=whitehatjr`;

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
  getOtp(spInitialCtaSuccess, true);
  $(".otp-input-box").val("");
});

$(".mweb-otp-close").click(() => {
  $(".mweb-otp-container").css("display", "none");
  clearInterval(timeInterval);
});

$(".otp-input-box").on("input", (e) => {
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

    const url = isUserExist
      ? `${STAG_BASE_URL}/api/V1/users/authenticateVerificationCode?timezone=${timeZone}&_vercel_no_cache=1&regionId=${country}&courseType=${selectedSubj}&brandId=whitehatjr&timestamp=`
      : `${STAG_BASE_URL}/api/V1/otp/verify?timezone=${timeZone}`;
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
      },
      error: function (err) {
        $(".otp-box").addClass("isError");
        $(".otp-err").css("display", "block");
        $(".otp-loader").css("display", "none");
        $(".otp-input-box").val("");

        console.log(err);
        Toastify({
          text: "Invalid OTP. Please try again",
          duration: 5000,
        }).showToast();
      },
    });
  }
});

const handleRegisterUser = () => {
  $.ajax({
    type: "POST",
    url: `${STAG_BASE_URL}/api/V1/trial/users/minimalFieldRegister?timezone=${timeZone}&isMobilePlatform=false&timestamp=`,
    cache: false,
    data: {
      mobile: parentMobileNum,
      grade: selectedGrade,
      isLaptop: "1",
      dialCode: dialCode,
      countryCode: country,
      timezone: "Asia/Calcutta",
    },

    success: function (res) {
      token = res.data.token;
      handleMecall();
      handleGetSlots();
    },
    error: function (err) {
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
    url: `${STAG_BASE_URL}/api/V1/userDetail/me?timezone=${timeZone}&timestamp=`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      studentDetails = res.data;

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
        $(`${isMweb ? '.grade-block-mweb':'.grade-block-web'}`).removeClass("active-state");
        $(".music-state").css("display", "none");

        handleGetDashboardLink();
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
  const musicType = e.currentTarget.nextElementSibling.id
    .split("-")[1]
    .toUpperCase();
  courseSubType = musicType;
  handleGetSlots();
});

const handleGetSlots = () => {
  $(".slot-loader").css("display", "block");

  $.ajax({
    type: "GET",
    url: `${STAG_BASE_URL}/api/V1/trial/slots/get?countryCode=${country}&grade=${selectedGrade}&timezone=${timeZone}&courseType=${selectedSubj.toUpperCase()}${
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
        // $(".confirm-slot-cta").addClass("disabled");
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
      moment(date.date).format("ddd") +
      '</p><p class="date-label">' +
      moment(date.date).format("DD") +
      '</p><p class="month-label">' +
      moment(date.date).format("MMM") +
      "</p></div>";

    $(".date-block-container").append(dateBlock);
  });
  handleAddEventTODateBlock();
  if (selectedSubj == "music") {
    $(".music-sub-cat").css("display", "none");
  }
};

const handleAddEventTODateBlock = () => {
  $(".date-block").click((e) => {
    const id = e.target.id.split("-").slice(-1)[0];
    onDateBlockClick(id);
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
      moment(slot.startTime).format("LT") +
      "</p></div>";

    if (slot.teacherCount) {
      $(".slots-container").append(slotEle);
      // for preselect of 1st slot
      if (isSlotSelected) {
        $(".slot-" + index).addClass("active-state");
        selectedTimeSlot = index;
        isSlotSelected = false;
        $(".slot-time-msg").text(
          `${moment(
            slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime
          ).format("LT")} `
        );
        const selectedDateBlock = slotsData[selectedDateIndex].date;
        $(".slot-date-msg").text(
          `${moment(selectedDateBlock).format("ddd")}, ${moment(
            selectedDateBlock
          ).format("DD")} ${moment(selectedDateBlock).format("MMM")}`
        );
      }
    }
  });

  $(".slot-block-card").click((e) => {
    $(".slot-block-card").removeClass("active-state");
    id = e.target.id.split("-").slice(-1)[0];
    $(".slot-" + id).addClass("active-state");
    selectedTimeSlot = id;
    // $(".mweb-sp-slot-cta").removeClass("disabled");
    // $(".confirm-slot-cta").removeClass("disabled");
    $(".slot-time-msg").text(
      `${moment(
        slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime
      ).format("LT")} `
    );
    const selectedDateBlock = slotsData[selectedDateIndex].date;
    $(".slot-date-msg").text(
      `${moment(selectedDateBlock).format("ddd")}, ${moment(
        selectedDateBlock
      ).format("DD")} ${moment(selectedDateBlock).format("MMM")}`
    );
  });
};

$(".mweb-sp-slot-cta").click(() => {
  handleBookSlot();
});

$(".confirm-slot-cta").click(() => {
  handleBookSlot();
});

const handleBookSlot = () => {
  const startTime =
    slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime;
  $(".slot-loader").css("display", "block");
  $.ajax({
    type: "POST",
    url: `${STAG_BASE_URL}/api/V1/trial/slots/book?timezone=${timeZone}&regionId=${country}&courseType=${selectedSubj.toUpperCase()}&${
      selectedSubj.includes("music") ? `courseSubType=${courseSubType}` : ""
    }`,
    cache: false,
    data: {
      countryCode: country,
      slot: {
        startTime: startTime,
        endTime: moment(startTime).add(1, "hours").toISOString(),
      },
      courseType: selectedSubj.toUpperCase(),
      studentId: studentDetails.students[0]?.student_courses[0]?.studentId,
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
    url: `${STAG_BASE_URL}/api/V1/students/${studentDetails.students[0].student_courses[0].studentId}/getDashbordLink?timezone=${timeZone}&brandId=whitehatjr&langCode=en_US&courseType=${selectedSubj}`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      dashboardLink = res.data.url;
      $(".slot-loader").css("display", "none");

      if (bookedSlot) {
        window.open(
          `https://code-stage.whjr.one/s/trial/success?jwt_token=${token}`,
          "_blank"
        );
        handleReset();
        if (isMweb) {
          $(".mweb-slot-container").css("display", "none");
          $(".mweb-initial-form").css("display", "block");
          $(".m-web-side-pannel").css("display", "none");
          customCssMethod(".mweb-banner-form", "display", "block");
        }else{
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
  formatedParentNum = ""
  $(".subject-card-sp").removeClass("active-state");
  $(`${isMweb ? '.grade-block-mweb':'.grade-block-web'}`).removeClass("active-state");
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
  $('body').css('overflow','auto')
  $(".parent-mail").removeClass("active-state");

  customClassMethod(".parent-num", false, "error-state");
  customClassMethod(".parent-num-dropdown", false, "error-state");
  customClassMethod(".parent-mobile-num", false, "error-state");


  customClassMethod(".parent-num", false, "error-state");
  customClassMethod(".parent-num-dropdown", false, "error-state");
  $(".err-msg-pm").css('display','none')

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
});

$(".mweb-back-arrow").click(() => {
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
  $.ajax({
    type: "GET",
    url: `https://api.timezonedb.com/v2.1/list-time-zone?key=VOWU23FPD15G&format=json`,
    cache: false,
    success: function (res) {
      timezonesList = res.zones;
      getTimeZonesEmbedded();
    },
  });
};

const getTimeZonesEmbedded = (TZList = timezonesList) => {
  $(`${isMweb ? ".mweb-timezones-container" : ".timezones-container"}`).empty();
  let item;
  TZList.map((zone) => {
    if (isMweb) {
      item = `<div class="mweb-timezone-item"><p  class="tz-name events-none">${
        zone.zoneName
      }</p><p class="tz-gmt events-none">(${GMTOffset(
        zone.gmtOffset
      )})</p><div  class="mweb-checked-image events-none ${
        timeZone == zone.zoneName ? "" : "d-none"
      }"><img src="https://uploads-ssl.webflow.com/616e5b481c168d84b208db74/61889840cc7f1927bc91374a_Clickable.png" loading="lazy" alt=""></div></div>`;
    } else {
      item = `<div class="timezone-item">
          <p class="paragraph-50 events-none ">${zone.zoneName}</p>
          <p class="paragraph-51 events-none ">(${GMTOffset(
            zone.gmtOffset
          )})</p>
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
  "input",
  (e) => {
    const val = e.target.value.toUpperCase();
    let tempTZList;
    if (val.length > 3) {
      tempTZList = timezonesList.filter(
        (item) => item.zoneName.toUpperCase().indexOf(val) > -1
      );
    } else {
      tempTZList = timezonesList;
    }
    getTimeZonesEmbedded(tempTZList);
  }
);
