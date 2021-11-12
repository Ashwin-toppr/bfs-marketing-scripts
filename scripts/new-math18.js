{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.counterup/1.0/jquery.counterup.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script> */}
 // scroll animation
 AOS.init();




 
 //realted to counter on stats
  $('.counter').counterUp({
      delay: 10,
      time: 1500
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');
  
var dialCodesList, dialCode='+91',country='IN',isMweb = window.screen.width < 500
  
 //curriculum functionality
  $('.grade-card').click((e)=>{
  	e.preventDefault()
    const id = e.target.id
  	selectingCourseTab(id)
  })
  
  $('#grade-select').change((e)=>{
  console.log(e)
  selectingCourseTab(e.target.value)
  })
  
  function selectingCourseTab(id){
  	Selectedgrade = id.split('').slice(-1)[0]
    const gradeCards =  document.getElementsByClassName('grade-card')
    $('.grade-card').removeClass('active-grade')
    $('#'+id).addClass('active-grade')
    
    
    getCoursePackgesList();
  }
  
  function getCoursePackgesList() {
    $.ajax({
      type: "GET",
      url: "https://api.byjusfutureschool.com/api/V1/public/packages/getV2?brandId=whitehatjr&courseType=MATH&country="+country+"&grade="+Selectedgrade+"&source=website",
      cache: false,

      success: handleAppendcourseCardChild
    });
	}
  
  
  
  handleAppendcourseCardChild = (data) => {
      const mainData = data.data
      var dataRestructure = []
      mainData.ONE_TO_ONE.ONE_TIME.map((pack)=>{
      	dataRestructure = [...Object.values(pack),...dataRestructure]
      })
      
      
      dataRestructure.map((pack)=>{
      	$('.pc'+pack.name.slice(0,1)+'-heading').text(pack.name)
      	$('.pc'+pack.name.slice(0,1)+'-save').text('SAVE ' +pack.discount+'%')
      	$('.pc'+pack.name.slice(0,1)+'-display-price').text('$'+pack.sellingPrice)
      	$('.pc'+pack.name.slice(0,1)+'-cut-price').text('$'+pack.mrp)
        $('.ppc-'+pack.name).text('Price per class $'+pack.perClassPrice)
        $('.vdc-'+pack.name).attr('href',pack.courseItem.course.curriculumLink)
        $('.badge-block-'+pack.name).empty()
        
	$('.pc'+pack.name.slice(0,1)+'-curr').text(pack.packageAdditionalInfo.curriculumIncludes)
        
        const classes = pack.credits ? `${pack.credits} classes`:''
	const projects = `${pack.packageAdditionalInfo.numberOfProjects} projects`        
        $('.class-prj-'+pack.name.slice(0,1)).text(`${classes} | ${projects}`)
        
        pack.packageAdditionalInfo.Achievement.map((achievement)=>{
        	const data = '<div class="badge"><img src="'+achievement.imageLink+'" loading="lazy" alt="" class="bdg-img"><div class="bdg-txt">'+achievement.title+'</div></div>'
        	$('.badge-block-'+pack.name).append(data)
        })
        
      })
    }
    
  	
selectingCourseTab('g-1')

  

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
  myToast,
  timeZone,
  isUserAuthenticated = false,
  courseSubType;

  //side pannel code
(function () {
  $.ajax({
    type: "GET",
    url: `https://stage-api.whjr.one/api/V1/geo/getInfo?_vercel_no_cache=1&courseType=${selectedSubj}&brandId=whitehatjr`,
    cache: false,
    success: function (res) {
      timeZone = res.data.timezone;
      country = res.data.countryIsoCode;
      console.log(res.data);
    },
  });
})();


// for dial codes
(function () {
  $.ajax({
    type: "GET",
    url: "https://mocki.io/v1/c1e47e61-1e8d-4ef8-ad01-835e245e148f", // custom mock api with dailcodes
    cache: false,

    success: (res) => {
      dialCodesList = res;

      $(".dial-codes-list").empty();

      dialCodesList.map((item) => {
        const ele = `<a href="#" class="dropdown-link dial-code w-dropdown-link" data-code='${item.dial_code}' tabindex="0">${item.flag} ${item.name} ${item.dial_code}</a>`;
        $(".dial-codes-list").append(ele);
      });

      $(".dial-code").click((e) => {
        dialCode = e.target.dataset.code;
        $(".dial-codes-list").removeClass("w--open");
      });
    },
  });
})();



$(`${isMweb ? '.mweb-schedule-cta' : '.schedule-cta' }`).click(()=>{
  customCssMethod("body", "overflow", "hidden");
  window.scrollTo(0, 0);
  selectedSubj = 'math'

  
  if(parentMobileNum && selectedGrade){
      if (!isMweb) {
        $(".sp-initial-cta").click();
      }else{
        $(".mweb-sp-initial-cta").click();
      }
  }else{
      $(".parent-mobile-num").val(parentMobileNum);
      if(!isMweb){
          customCssMethod(".sidepanel-container", "display", "block");
      }else{
          customCssMethod(".m-web-side-pannel", "display", "block");
          customCssMethod("body", "overflow", "hidden");
          customCssMethod(".mweb-banner-form", "display", "none");
      }
  }
})

$(`.${selectedSubj}-block`).addClass('active-state')

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
  enableScheduleCta();
  });
};

$('.grade-home').click((e)=>{
  selectedGrade = e.target.id.split("-").slice(-1)[0];
  $('.grade-home').removeClass('active-state')
  $(`#${e.target.id}`).addClass('active-state')
})

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
    url: `https://stage-api.whjr.one/api/V1/userDetail/existByEmailOrMobile?timezone=${timeZone}&regionId=US&courseType=${selectedSubj}&brandId=whitehatjr`,
    cache: false,
    data: { mobile: parentMobileNum, dialCode },

    success: function (res) {
      isUserExist = res.data.isExist;
    },
  });
};

const checkValidNum = (val) => {
  const valid =  val.length === 10;

  customCssMethod(".err-msg-pm", "display", valid ? "none" : "block");
  customClassMethod(".parent-num", !valid, "error-state");
  customClassMethod(".parent-num-dropdown", !valid, "error-state");
  customClassMethod(".parent-mobile-num", !valid, "error-state");
  $(".valid-icon").css("display", valid ? "block" : 'none');

  return valid;
};

(function () {
  $(".parent-mobile-num").keypress(function (e) {
    var charCode = e.which ? e.which : event.keyCode;

    if (String.fromCharCode(charCode).match(/[^0-9]/g)) return false;
  });
});

$(".parent-mobile-num").on("input", (e) => {
  checkValidNum(e.target.value);
  if (e.target.value.length > 9) {
    parentMobileNum = e.target.value;
    isExist();
  }
  if (studentDetails) {
    selectedGrade = "";
    otpValue = "";
    selectedSubj = "";
    isUserAuthenticated = false
    $(".subject-card-sp").removeClass("active-state");
    $(".grade-block").removeClass("active-state");
    $(".subject-card-sp").removeClass("disabled");
    $(
      `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
    ).css("display", "none");
  }
  enableScheduleCta();
});

const enableScheduleCta = () => {
  if (parentMobileNum.length === 10 && !!selectedGrade) $(`${isMweb ? ".mweb-sp-initial-cta" : ".sp-initial-cta"}`).removeClass('disabled')
}


$(`${isMweb ? ".mweb-sp-initial-cta" : ".sp-initial-cta"}`).click(() => {


  if(isUserAuthenticated){
    handleMecall()
  }else{
    getOtp(spInitialCtaSuccess );
    $(
      `${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`
    ).css("display", "none");
    $(".otp-input-box").val("");
  }

});



const spInitialCtaSuccess = (res) => {
  if(!isMweb){
    $(".sp-initial-form").css("display", "none");
  }
  $(`${isMweb ? '.mweb-otp-container' : '.otp-container'}`).css("display", "block");
  $(".otp-user-exist-msg").css("display", isUserExist ? "block" : "none");
  // $(".otp-heading").text(
  //   isUserExist ? "You are already registered" : "Enter the 4-digit code"
  // );
  $(".otp-message").text(
    isUserExist ? "Login using OTP sent to" : "OTP sent to "
  );
  otpTimer();
  $(".selected-num-display").text("+91 " + parentMobileNum);

  if (parentMobileNum && selectedGrade) {
    customCssMethod(".sidepanel-container", "display", "block");
  }
  challengeCodeForOtp = res.data.challenge;
};


const otpTimer = () => {
  var timer = 50;
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
    ? `https://stage-api.whjr.one/api/V1/users/sendStudentVerificationCode?timezone=${timeZone}&regionId=${country}&courseType=${selectedSubj}&brandId=whitehatjr&timestamp=1632321880482`
    : `https://stage-api.whjr.one/api/V1/otp/generate?regionId=${country}&timezone=${timeZone}&courseType=${selectedSubj}&brandId=whitehatjr`;

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
  getOtp(spInitialCtaSuccess, true);
  $(".otp-input-box").val("");
});



$(".mweb-otp-close").click(() => {
  $(".mweb-otp-container").css("display", "none");
});


$('.otp-input-box').on('input',(e)=>{

  $(`div.otp-box`).removeClass("orange isError focus blink");
  $(`div.otp-box:nth-child(${e.target.value.length+3})`).addClass('blink')
  $('.otp-box:nth-child(1)').focus()
  $(".jss123").css("caret-color", "black");

  for(let i=2; i<e.target.value.length+2; i++){
    $(`div.otp-box:nth-child(${i})`).addClass(
      "orange focus"
    );
  }

  if(e.target.value.length >= 4){
    otpValue = e.target.value;
    $(".jss123").css("caret-color", "transparent");

    $(".otp-loader").css("display", "block");

    const url = isUserExist
      ? `https://stage-api.whjr.one/api/V1/users/authenticateVerificationCode?timezone=${timeZone}&_vercel_no_cache=1&regionId=US&courseType=${selectedSubj}&brandId=whitehatjr&timestamp=1632322088178`
      : `https://stage-api.whjr.one/api/V1/otp/verify?timezone=${timeZone}`;
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
        isUserAuthenticated = true
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
          text: 'Invalid OTP. Please try again',
          duration: 5000,
        }).showToast();
      },
    });

  }

})


const handleRegisterUser = () => {
  $.ajax({
    type: "POST",
    url: `https://stage-api.whjr.one/api/V1/trial/users/minimalFieldRegister?timezone=${timeZone}&timestamp=1608107097248&isMobilePlatform=false`,
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
    url: `https://stage-api.whjr.one/api/V1/userDetail/me?timezone=${timeZone}&timestamp=1612940173960&clientVersion=main-ui-24d1afka4.whjr.dev`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      studentDetails = res.data;

      const errStatements = {
        not_scheduled: "",
        pre_trial: `You have already booked a trial class for ${selectedSubj}. Go to dashboard to manage your prior bookings.`,
        post_trial: `You have already attended a trial class for ${selectedSubj}. Open dashboard to view your bookings`,
        paid: `You have already attended a trial class for ${selectedSubj}. Open dashboard to view your bookings`,
      };

      const trailStatus = studentDetails.students[0].student_courses.filter(
        (course) => course.courseType === selectedSubj.toUpperCase()
      );

      if (trailStatus[0] && trailStatus[0].trialStatus !== "not_scheduled") {
        $(`${isMweb ? ".mweb-otp-container" : ".otp-container"}`).css(
          "display",
          "none"
        );
        $(".otp-user-exist-msg").css("display", "none");
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
        $(".grade-block").removeClass("active-state");
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

$('.music-radio').click((e)=>{
  const musicType = e.currentTarget.nextElementSibling.id.split('-')[1].toUpperCase() 
  if(musicType === 'NONE'){
    courseSubType = ''
  }else{
    courseSubType = musicType
  }
  handleGetSlots()
})

const handleGetSlots = () => {
  $(".slot-loader").css("display", "block");

  $.ajax({
    type: "GET",
    url: `https://stage-api.whjr.one/api/V1/trial/slots/get?countryCode=US&grade=${selectedGrade}&timezone=${timeZone}&courseType=${selectedSubj}${courseSubType ? '&courseSubType='+courseSubType : ''}`,
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
      $(".timezone-value").text(timeZone);
    $(".slot-loader").css("display", "none");


      if (isMweb) {
        $(".mweb-otp-container").css("display", "none");
        $(".mweb-initial-form").css("display", "none");
        $(".mweb-slot-container").css("display", "block");
        $(".mweb-sp-slot-cta").addClass("disabled");
      } else {
        $(".otp-container").css("display", "none");
        $(".otp-user-exist-msg").css("display", "none");$(`${isMweb ? ".mweb-initial-form" : ".sp-initial-form"}`).css("display","none");
        $(`${isMweb ? ".mweb-sp-registered-user-msg" : ".sp-registered-user-msg"}`).css("display", "none");
        $(".side-panel-slot").css("display", "block");
        $('.music-sub-cat').css('display',selectedSubj == 'music' ? 'block' : 'none')
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
  if(selectedSubj == 'music'){
    $('.music-sub-cat').css('display','none')
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

      if (slot.teacherCount) $(".slots-container").append(slotEle);
      // for preselect of 1st slot
      if(!!selectedTimeSlot){
        $(".slot-" + index).addClass("active-state");
        selectedTimeSlot = index
      } 
  });

  $(".slot-block-card").click((e) => {
    $(".slot-block-card").removeClass("active-state");
    id = e.target.id.split("-").slice(-1)[0];
    $(".slot-" + id).addClass("active-state");
    selectedTimeSlot = id;
    $(".mweb-sp-slot-cta").removeClass("disabled");
    // $(".confirm-slot-cta").removeClass("disabled");
    $(".slot-time-msg").text(moment(slotsData[selectedDateIndex].slots[selectedTimeSlot].startTime).format("LT"));
    const selectedDateBlock = slotsData[selectedDateIndex].date;
    $(".slot-date-msg").text(
      `${moment(selectedDateBlock).format("ddd")}, ${moment(selectedDateBlock).format("DD")} ${moment(selectedDateBlock).format("MMM")}`
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
    $('.slot-loader').css('display','block')
  $.ajax({
    type: "POST",
    url: `https://stage-api.whjr.one/api/V1/trial/slots/book?timezone=${timeZone}&regionId=US&courseType=${selectedSubj}`,
    cache: false,
    data: {
      countryCode: "IN",
      slot: {
        startTime: startTime,
        endTime: moment(startTime).add(1, "hours").toISOString(),
      },
      courseType: selectedSubj,
      studentId: studentDetails.students[0]?.student_courses[0]?.studentId,
    },
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      console.log(res);
      handleGetDashboardLink(true); // true - after booking slot
    },
    error: function (err) {
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
    url: `https://stage-api.whjr.one/api/V1/students/${studentDetails.students[0].student_courses[0].studentId}/getDashbordLink?timezone=${timeZone}&brandId=whitehatjr&clientVersion=%25clientBuildVersion%25&langCode=en_US&courseType=${selectedSubj}`,
    cache: false,
    headers: {
      authorization: `Bearer ${token}`,
    },

    success: function (res) {
      dashboardLink = res.data.url;
      $(".slot-loader").css("display", "none");

      const subjObj ={
        math : 'math',
        coding : 'code',
        music : 'music'
      }

      if (bookedSlot) {
        window.open(dashboardLink, "_blank");
        window.focus();
        self.focus();
        setTimeout(() => {
          window.location = `https://${subjObj[selectedSubj]}-stage.whjr.one/s/trial/success`;
        }, 2000);
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

$(".dashboard-redirection").click(() => {
  window.open(dashboardLink, "_blank");
});

const handleReset = () => {
  selectedGrade = "";
  otpValue = "";
  selectedSubj = "";
  $(".subject-card-sp").removeClass("active-state");
  $(".grade-block").removeClass("active-state");
  $(".subject-card-sp").removeClass("disabled");
  $(".otp-container").css("display", "none");
  $(".side-panel-slot").css("display", "none");
  $(".otp-user-exist-msg").css("display", "none");
  $(".sp-initial-form").css("display", "block");
  clearInterval(timeInterval);
  $(".music-state").css("display", "none");
};

$(".sidepannel-close").click(() => {
  customCssMethod("body", "overflow", "auto");
  customCssMethod(".sidepanel-container", "display", "none");
  handleReset();
  customCssMethod("otp-user-exist-msg", "display", "none");
});

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


$(".otp-input-box").focus(function () {
  var that = this;
  setTimeout(function () {
    that.selectionStart = that.selectionEnd = 3;
  }, 0);
});




$(".timezone-value").click(() => {
  $(".timezones-list").css("display", "block");
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

const getTimeZonesEmbedded = () => {
  $(".timezones-container").empty();
  timezonesList.map((zone) => {
    const item = `<div class="timezone-item">
        <p class="paragraph-50 events-none ">${zone.zoneName}</p>
        <p class="paragraph-51 events-none ">(${GMTOffset(zone.gmtOffset)})</p>
        <div class="checked-image events-none ${
          timeZone == zone.zoneName ? "" : "d-none"
        } "><img src="https://uploads-ssl.webflow.com/616e5b481c168d84b208db74/61889840cc7f1927bc91374a_Clickable.png" loading="lazy" alt=""></div></div>`;
    $(".timezones-container").append(item);
  });

  $(".timezone-item").click((e) => {
    timeZone = e.target.children[0].innerText;
    $(".timezones-list").css("display", "none");
    $(".timezone-value").text(e.target.children[0].innerText);
    handleGetSlots()
  });
};

const GMTOffset = (val) => {
  const hours = `0${Math.floor(val / 3600)}`.slice(-2);
  const mins = `0${Math.abs(val / 60) % 60}`.slice(-2);
  const sign = `${val}`.charAt() == "-" ? "" : "+";
  return `GMT${sign}${hours}:${mins}`;
};

// $('.sidepanel-container').click(()=>{
//     $(".timezones-list").css("display", "none");
// })



// const getTimeZonesEmbedded = () => {
//   $(".timezones-container").empty();
//   timezonesList.map((zone) => {
//     const splitedTimeZone = zone.split(' - ')
//     const item = `<div class="timezone-item " data-timezone = "${splitedTimeZone[0]}" >
//         <p class="paragraph-50 events-none ">${splitedTimeZone[1]} - ${splitedTimeZone[2]} </p>
//         <p class="paragraph-51 events-none ">(${splitedTimeZone[0]})</p>
//         <div class="checked-image events-none ${
//           timeZone == zone.zoneName ? "" : "d-none"
//         } "><img src="https://uploads-ssl.webflow.com/616e5b481c168d84b208db74/61889840cc7f1927bc91374a_Clickable.png" loading="lazy" alt=""></div></div>`;
//     $(".timezones-container").append(item);
//   });

//   $(".timezone-item").click((e) => {
//     timezone = e.target.dataset.timezone;
//     $(".timezones-list").css("display", "none");
//     $(".timezone-value").text(timezone);
//     handleGetSlots()
//   });
// };
























  
  
  
//  </script>





 




