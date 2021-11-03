AOS.init();

//realted to counter on stats
$(".counter").counterUp({
  delay: 10,
  time: 1500,
});
$(".counter").addClass("animated fadeInDownBig");
$("h3").addClass("animated fadeIn");

var dialCode = "+91",
  country = "IN",
  isMweb = window.screen.width < 500;

//curriculum functionality
$(".grade-card").click((e) => {
  e.preventDefault();
  const id = e.target.id;
  selectingCourseTab(id);
});

$("#grade-select").change((e) => {
  console.log(e);
  selectingCourseTab(e.target.value);
});

function selectingCourseTab(id) {
  Selectedgrade = id.split("").slice(-1)[0];
  const gradeCards = document.getElementsByClassName("grade-card");
  $(".grade-card").removeClass("active-grade");
  $("#" + id).addClass("active-grade");

  getCoursePackgesList();
}

function getCoursePackgesList() {
  $.ajax({
    type: "GET",
    url:
      "https://api.byjusfutureschool.com/api/V1/public/packages/getV2?brandId=whitehatjr&courseType=MATH&country=US&grade=" +
      Selectedgrade +
      "&source=website",
    cache: false,

    success: handleAppendcourseCardChild,
  });
}

handleAppendcourseCardChild = (data) => {
  const mainData = data.data;
  var dataRestructure = [];
  mainData.ONE_TO_ONE.ONE_TIME.map((pack) => {
    dataRestructure = [...Object.values(pack), ...dataRestructure];
  });

  dataRestructure.map((pack) => {
    $(".pc" + pack.name.slice(0, 1) + "-heading").text(pack.name);
    $(".pc" + pack.name.slice(0, 1) + "-save").text(
      "SAVE " + pack.discount + "%"
    );
    $(".pc" + pack.name.slice(0, 1) + "-display-price").text(
      "$" + pack.sellingPrice
    );
    $(".pc" + pack.name.slice(0, 1) + "-cut-price").text("$" + pack.mrp);
    $(".ppc-" + pack.name).text("Price per class $" + pack.perClassPrice);
    $(".vdc-" + pack.name).attr("href", pack.courseItem.course.curriculumLink);
    $(".badge-block-" + pack.name).empty();

    const currIncludes = pack.packageAdditionalInfo?.curriculumIncludes.reduce(
      (text, value, i, array) =>
        text + (i < array.length - 1 ? ", " : " and ") + value
    );

    $(".curri-includes-" + pack.name.slice(0, 1)).text(currIncludes);

    const classes = pack.credits ? `${pack.credits} classes` : "";
    const projects = pack.packageAdditionalInfo.numberOfProjects
      ? `| ${pack.packageAdditionalInfo.numberOfProjects} Project${
          pack.packageAdditionalInfo.numberOfProjects > 1 ? "s" : ""
        } `
      : "";

    $(".class-prj-" + pack.name.slice(0, 1)).text(`${classes} ${projects}`);

    pack.packageAdditionalInfo.Achievement.map((achievement) => {
      const data =
        '<div class="badge"><img src="' +
        achievement.imageLink +
        '" loading="lazy" alt="" class="bdg-img"><div class="bdg-txt">' +
        achievement.title +
        "</div></div>";
      $(".badge-block-" + pack.name).append(data);
    });
  });
};

(function () {
  selectingCourseTab("g-1");
})();

var dialCode = "+91",
  country = "IN",
  isMweb = window.screen.width < 500;
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
  selectedSubj = "math",
  selectedGrade,
  otpValue = "",
  isUserExist,
  token,
  slotsData,
  selectedTimeSlot,
  studentDetails,
  dashboardLink,
  challengeCodeForOtp,
  myToast;

//side pannel code

$(".schedule-cta").click(() => {
  customCssMethod("body", "overflow", "hidden");
  window.scrollTo(0, 0);
  if (parentMobileNum && selectedGrade) {
    $(".sp-initial-cta").click();
  } else {
    customCssMethod(".sidepanel-container", "display", "block");
    $(".parent-mobile-num").val(parentMobileNum);
  }
});

$(".mweb-schedule-cta").click(() => {
  customCssMethod(".m-web-side-pannel", "display", "block");
  customCssMethod("body", "overflow", "hidden");
  customCssMethod(".mweb-banner-form", "display", "none");
  window.scrollTo(0, 0);
  $(".parent-mobile-num").val(parentMobileNum);

  if (parentMobileNum && selectedGrade) {
    ".mweb-sp-initial-cta".click();
  }
});

$(".sidepannel-close").click(() => {
  customCssMethod("body", "overflow", "auto");
  customCssMethod(".sidepanel-container", "display", "none");
});

//form functionality

$(`.${selectedSubj}-block`).addClass("active-state");

const getGradeBlocks = () => {
  const subjGrades = {
    music: ["1", "2-3", "4-6", "7-9", "10-12"],
    math: [1, 2, 3, 4, 5, 6, 7, 8],
    coding: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };
  $(".child-grade-blk-copy").empty();

  subjGrades[selectedSubj].map((grade) => {
    const element = `<div id="grade-${grade}" class="grade-block grade-card-sp  ${
      isMweb ? "mweb-" : ""
    }grade-${selectedSubj}  ${
      isMweb ? "mweb-" : ""
    }grade-${grade}"><p class="paragraph-41">Grade</p><p class="paragraph-42">${grade}</p></div>`;

    $(".child-grade-blk-copy").append(element);
  });

  $(".grade-block").click((e) => {
    selectedGrade = e.target.id.split("-").slice(-1)[0];
    debugger;
    customClassMethod(".grade-block", false, "active-state");
    if (selectedSubj == "music") {
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
  });
};

getGradeBlocks();

$(".subject-card-sp").click((e) => {
  $(".subject-card-sp").removeClass("active-state");
  const id = e.target.id;
  $(`.${id}-block`).addClass("active-state");
  selectedSubj = id;
  customCssMethod(".music-state", "display", id == "music" ? "block" : "none");
  getGradeBlocks();
});

const isExist = () => {
  $.ajax({
    type: "POST",
    url: `https://nexfive.whjr.one/api/V1/userDetail/existByEmailOrMobile?timezone=Asia%2FCalcutta&regionId=US&courseType=${selectedSubj}&brandId=whitehatjr`,
    cache: false,
    data: { mobile: parentMobileNum, dialCode },

    success: function (res) {
      isUserExist = res.data.isExist;
    },
  });
};

const checkValidNum = (val) => {
  const valid = $.isNumeric(val);

  customCssMethod(".err-msg-pm", "display", valid ? "none" : "block");
  customClassMethod(".parent-num", !valid, "error-state");
  customClassMethod(".parent-num-dropdown", !valid, "error-state");
  customClassMethod(".parent-mobile-num", !valid, "error-state");
  return valid;
};

$(".parent-mobile-num").on("input", (e) => {
  if (e.target.value.length > 9) {
    checkValidNum(e.target.value);
    parentMobileNum = e.target.value;
    isExist();
  }
  if(studentDetails){
   selectedGrade = ''
   otpValue = ''
   selectedSubj = ''
  $(".subject-card-sp").removeClass("active-state");
  $(".grade-block").removeClass("active-state");
  $(".subject-card-sp").removeClass("disabled");
  
  }
});

$(".sp-initial-cta").click(() => {
  if (!checkValidNum(parentMobileNum)) return;
  getOtp(spInitialCtaSuccess);
  $(`${isMweb ? '.mweb-sp-registered-user-msg' : '.sp-registered-user-msg'}`).css('display','none')
  $('.otp-input').val('')

});

$(".mweb-sp-initial-cta").click(() => {
  if (!checkValidNum(parentMobileNum)) return;
  getOtp(mwebSpinitilacta);
  $(`${isMweb ? '.mweb-sp-registered-user-msg' : '.sp-registered-user-msg'}`).css('display','none')

});

const mwebSpinitilacta = (res) => {
  $(".otp-user-exist-msg").css("display", isUserExist ? "block" : "none");
  $(".mweb-otp-container").css("display", "block");
  $(".selected-num-display").text("+91 " + parentMobileNum);
  $('.otp-heading').text(isUserExist ? 'You are already registered' : 'Enter the 4-digit code')
  $(".otp-message").text(isUserExist ? 'Login using OTP sent to' : 'OTP sent to ')
  otpTimer();
  challengeCodeForOtp = res.data.challenge;
};

var timeInterval;

const otpTimer = () => {
  var timer = 50
  $(".resend-otp").css("display", "none");

  timeInterval = setInterval(() => {
    $(".resend-otp-msg").text(`Didn’t recieve the code? Retry after ${timer}`);
    timer -= 1
    if(timer <= 0){
      clearInterval(timeInterval);
      $(".resend-otp-msg").text(`Didn’t recieve the code?`);
      $(".resend-otp").css('display','block')
    }
  }, 1000);
}

const spInitialCtaSuccess = (res) => {
  $(".sp-initial-form").css("display", "none");
  $(".otp-user-exist-msg").css('display', isUserExist ? 'block' : 'none' )
  $('.otp-heading').text(isUserExist ? 'You are already registered' : 'Enter the 4-digit code')
  $(".otp-message").text(isUserExist ? 'Login using OTP sent to' : 'OTP sent to ')
  otpTimer()
  $(".otp-container").css("display", "block");
  $(".selected-num-display").text("+91 " + parentMobileNum);

  if (parentMobileNum && selectedGrade) {
    customCssMethod(".sidepanel-container", "display", "block");
  }
  challengeCodeForOtp = res.data.challenge;
};

const getOtp = (callback, isResend) => {
  const url = isUserExist
    ? `https://nexfive.whjr.one/api/V1/users/sendStudentVerificationCode?timezone=Asia%2FCalcutta&regionId=${country}&courseType=${selectedSubj}&brandId=whitehatjr&timestamp=1632321880482`
    : `https://nexfive.whjr.one/api/V1/otp/generate?regionId=${country}&courseType=${selectedSubj}&brandId=whitehatjr`;

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
  });
};

$(".resend-otp").click(() => {
  getOtp(isMweb ? mwebSpinitilacta : spInitialCtaSuccess, true);
});

$(".mweb-otp-close").click(() => {
  $(".mweb-otp-container").css("display", "none");
});

$(".otp-input").on("input", (e) => {
  otpValue = "";

  $(".otp-input").removeClass("error-state");
  $(".otp-err").css("display", "none");
  if (!e.target.nextElementSibling) {
    for (var i = 1; i < 5; i++) {
      otpValue += $(`.${isMweb ? "mweb-" : ""}otp-${i}`).val();
    }

    $(".otp-loader").css("display", "block");

    const url = isUserExist
      ? `https://nexfive.whjr.one/api/V1/users/authenticateVerificationCode?timezone=Asia%2FCalcutta&_vercel_no_cache=1&regionId=US&courseType=${selectedSubj}&brandId=whitehatjr&timestamp=1632322088178`
      : `https://nexfive.whjr.one/api/V1/otp/verify`;
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
        if (!isUserExist) {
          handleRegisterUser();
        }else{
          token = res.data.token;
          handleMecall()
        }
      },
      error: function (err) {
        $(".otp-input").addClass("error-state");
        $(".otp-err").css("display", "block");
        $(".otp-loader").css("display", "none");
        console.log(err.data)
        myToast = Toastify({
          text: err.data.message,
          duration: 5000,
        });
        myToast.showToast()
      },
    });
  }
  if (e.target.value) {
    e.target.nextElementSibling.focus();
  }
});

const handleRegisterUser = () => {
  $.ajax({
    type: "POST",
    url: `https://nexfive.whjr.one/api/V1/trial/users/minimalFieldRegister?timezone=Asia%2FCalcutta&timestamp=1608107097248&isMobilePlatform=false`,
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
  });
};

$(".back-arrow").click(() => {
  if ($(".mweb-slot-container").css("display") === "block") {
    $(".mweb-slot-container").css("display", "none");
    $(".mweb-initial-form").css("display", "block");
  } else if ($(".mweb-initial-form").css("display") === "block") {
    $(".m-web-side-pannel").css("display", "none");
    $("body").css("overflow", "auto");
    $(".mweb-banner-form").css("display", "block");
  }
  if ($(".side-panel-slot").css("display") === "block") {
    $(".sp-initial-form").css("display", "block");
    $(".side-panel-slot").css("display", "none");
  }
});


// slot section functinality

const handleGetSlots = () => {
  $.ajax({
    type: "GET",
    url: `https://nexfive.whjr.one/api/V1/trial/slots/get?countryCode=US&grade=${selectedGrade}&timezone=Asia/Calcutta&courseType=${selectedSubj}`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      slotsData = res.data.slots;
      handleDateBlockStructure();
      clearInterval(timeInterval);
      if (isMweb) {
        $(".mweb-otp-container").css("display", "none");
        $(".mweb-initial-form").css("display", "none");
        $(".mweb-slot-container").css("display", "block");
        $(".mweb-sp-slot-cta").addClass("disabled");
      } else {
        $(".otp-container").css("display", "none");
        $(".otp-user-exist-msg").css('display','none')
        $(".side-panel-slot").css("display", "block");
        $(".confirm-slot-cta").addClass("disabled");
      }
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
};

var selectedDateIndex;

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
  slotsData[selectedDateIndex].slots.map((slot, index) => {
    const isSlotAvail = slot.teacherCount > 0 ? "" : "disable";
    const slotEle =
      '<div id="slot-' +
      index +
      '" class="slot-block-card slot-' +
      index +
      " " +
      isSlotAvail +
      '"><p class="slot-time">' +
      moment(slot.startTime).format("LT") +
      "</p></div>";

    $(".slots-container").append(slotEle);
  });
  $(".slot-block-card").click((e) => {
    $(".slot-block-card").removeClass("active-state");
    id = e.target.id.split("-").slice(-1)[0];
    $(".slot-" + id).addClass("active-state");
    selectedTimeSlot = id;
    $(".mweb-sp-slot-cta").removeClass("disabled");
    $(".confirm-slot-cta").removeClass("disabled");
  });
};

$(".mweb-sp-slot-cta").click(() => {
  handleBookSlot();
});

$(".confirm-slot-cta").click(() => {
  handleBookSlot();
});

const handleMecall = () => {
    $.ajax({
      type: "GET",
      url: `https://nexfive.whjr.one/api/V1/userDetail/me?timezone=Asia%2FCalcutta&timestamp=1612940173960&clientVersion=main-ui-24d1afka4.whjr.dev`,
      cache: false,
      headers: {
        authorization: `Bearer ${token}`,
      },

      success: function (res) {
        studentDetails = res.data 

        const errStatements = {
          not_scheduled: "",
          pre_trial: `You have already booked a trial class for ${selectedSubj}. Go to dashboard to manage your prior bookings.`,
          post_trial: "User already booked and attended trail",
          paid: "User is a paid user, can't rebook trial class",
        };

        const trailStatus = studentDetails.students[0].student_courses.filter(
          (course) => course.courseType === selectedSubj.toUpperCase()
        );

        if (trailStatus[0] && trailStatus[0].trialStatus !== "not_scheduled") {
          $(`${isMweb ? '.mweb-otp-container' : '.otp-container' }`).css("display", "none");
          clearInterval(timeInterval);
          $(".otp-user-exist-msg").css("display", "none");
          $(`${isMweb ? '.mweb-initial-form':'.sp-initial-form'}`).css("display", "block");
          $(`${isMweb ? '.mweb-sp-registered-user-msg' : '.sp-registered-user-msg'}`).css('display','flex')
          $(`${isMweb ? '.mweb-registered-user-msg' : '.registered-user-msg'}`).text(errStatements[trailStatus[0].trialStatus])
          studentDetails.students[0].student_courses.map((course)=>{
            $(`.${course.courseType.toLowerCase()}-block`).removeClass("disabled");
            $(`.${course.courseType.toLowerCase()}-block`).addClass('disabled')
          })
          $(".otp-loader").css("display", "none");
          handleGetDashboardLink();
        }else{
          handleGetSlots()
        }
      },
    });
}

const handleBookSlot = () => {
  const startTime =
    slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime;
  $.ajax({
    type: "POST",
    url: `https://nexfive.whjr.one/api/V1/trial/slots/book?timezone=Asia%2FCalcutta&regionId=US&courseType=${selectedSubj}`,
    cache: false,
    data: {
      countryCode: "IN",
      slot: {
        startTime: startTime,
        endTime: moment(startTime).add(1, "hours").toISOString(),
      },
      courseType: selectedSubj,
      studentId: studentDetails.students[0]?.student_courses[0]?.studentId
    },
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      console.log(res);
      handleGetDashboardLink(true); // true - after booking slot 
    },
  });
};


const handleGetDashboardLink = (bookedSlot) => {
    $.ajax({
      type: "GET",
      url: `https://nexfive.whjr.one/api/V1/students/${studentDetails.students[0].student_courses[0].studentId}/getDashbordLink?timezone=Asia%2FCalcutta&brandId=whitehatjr&clientVersion=%25clientBuildVersion%25&langCode=en_US&courseType=${selectedSubj}`,
      cache: false,
      headers: {
        authorization: `Bearer ${token}`,
      },

      success: function (res) {
        dashboardLink = res.data.url
        if(bookedSlot){
          window.open(dashboardLink,'_blank');
          window.location = "https://code-stage.whjr.one/s/trial/success";
        }
      },
      async: false
    });
}

$(".dashboard-redirection").click(()=>{
  window.open(dashboardLink,'_blank');
})
