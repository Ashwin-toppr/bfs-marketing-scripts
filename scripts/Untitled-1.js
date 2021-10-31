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
  
  var dialCode='+91',country='IN',isMweb = window.screen.width < 500
  
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
      url: "https://api.byjusfutureschool.com/api/V1/public/packages/getV2?brandId=whitehatjr&courseType=MATH&country=US&grade="+Selectedgrade+"&source=website",
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
        
        const currIncludes = pack.packageAdditionalInfo?.curriculumIncludes.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' and ') + value);

        $('.curri-includes-'+pack.name.slice(0,1)).text(currIncludes)
        
        const classes = pack.credits ? `${pack.credits} classes`:''
        const projects = pack.packageAdditionalInfo.numberOfProjects ? `| ${pack.packageAdditionalInfo.numberOfProjects} Project${pack.packageAdditionalInfo.numberOfProjects > 1 ? 's':''} `: ''
        
        $('.class-prj-'+pack.name.slice(0,1)).text(`${classes} ${projects}`)
        
        pack.packageAdditionalInfo.Achievement.map((achievement)=>{
        	const data = '<div class="badge"><img src="'+achievement.imageLink+'" loading="lazy" alt="" class="bdg-img"><div class="bdg-txt">'+achievement.title+'</div></div>'
        	$('.badge-block-'+pack.name).append(data)
        })
        
      })
    }
    
  (function(){
  	selectingCourseTab('g-1')
  })()
  
  
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

//side pannel code

$(".schedule-cta").click(() => {
  customCssMethod(".sidepanel-container", "display", "block");
  customCssMethod("body", "overflow", "hidden");
  window.scrollTo(0, 0);
  $(".parent-mobile-num").val(parentMobileNum);
});

$(".mweb-schedule-cta").click(() => {
  customCssMethod(".m-web-side-pannel", "display", "block");
  customCssMethod("body", "overflow", "hidden");
  customCssMethod(".mweb-banner-form", "display", "none");
  window.scrollTo(0, 0);
  $(".parent-mobile-num").val(parentMobileNum);
});

$(".sidepannel-close").click(() => {
  customCssMethod("body", "overflow", "auto");
  customCssMethod(".sidepanel-container", "display", "none");
});

//form functionality

var parentMobileNum = "",
  selectedSubj = "math",
  selectedGrade,
  otpValue = "",
  isUserExist,
  token;

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
    }grade-${selectedSubj}  grade-${grade}"><p class="paragraph-41">Grade</p><p class="paragraph-42">${grade}</p></div>`;

    $(".child-grade-blk-copy").append(element);
  });
};

getGradeBlocks();

$(".subject-card-sp").click((e) => {
  $(".subject-card-sp").removeClass("active-state");
  const id = e.target.id;
  $(`.${id}-block`).addClass("active-state");
  selectedSubj = id;
  getGradeBlocks();
});

const isExist = () => {
  $.ajax({
    type: "POST",
    url: "https://nexfive.whjr.one/api/V1/userDetail/existByEmailOrMobile?timezone=Asia%2FCalcutta&regionId=US&courseType=CODING&brandId=whitehatjr",
    cache: false,
    data: { mobile: parentMobileNum, dialCode },

    success: function (res) {
      isUserExist = res.data.isExist;
    },
  });
};

$(".parent-mobile-num").on("input", (e) => {
  if (e.target.value.length > 9) {
    const valid = $.isNumeric(e.target.value);
    parentMobileNum = e.target.value;
    valid && isExist();

    customCssMethod(".err-msg-pm", "display", valid ? "none" : "block");
    customClassMethod(".parent-num", !valid, "error-state");
    customClassMethod(".parent-num-dropdown", !valid, "error-state");
    customClassMethod(".parent-mobile-num", !valid, "error-state");
  }
});
$(".grade-block").click((e) => {
  selectedGrade = e.target.id.split("-").slice(-1)[0];
  debugger
  customClassMethod(".grade-block", false, "active-state");
  customClassMethod(
    `.${isMweb ? "mweb-" : ""}grade-${selectedGrade}`,
    true,
    "active-state"
  );
});

$(".sp-initial-cta").click(() => {
  getOtp(spInitialCtaSuccess);
});

$(".mweb-sp-initial-cta").click(() => {
  getOtp(mwebSpinitilacta);
});

const mwebSpinitilacta = () => {
  $(".mweb-otp-container").css("display", "block");
};

var challengeCodeForOtp;

const spInitialCtaSuccess = (res) => {
  $(".sp-initial-form").css("display", "none");
  $(".otp-container").css("display", "block");
  $(".selected-num-display").text("+91 " + parentMobileNum);
  console.log(res.data)
  challengeCodeForOtp = res.data.data.challenge
};

const getOtp = (callback) => {
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
      ...(isUserExist && { emailOrMobile: parentMobileNum })
    },

    success: callback,
  });
};

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
    const url = isUserExist
      ? `https://nexfive.whjr.one/api/V1/users/authenticateVerificationCode?timezone=Asia%2FCalcutta&_vercel_no_cache=1&regionId=IN&courseType=${selectedSubj}&brandId=whitehatjr&timestamp=1632322088178`
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
        $(".otp-container").css("display", "none");
        $(".side-panel-slot").css("display", "block");
        if (!isUserExist) {
          handleRegisterUser();
        } else {
          token = res.data.token;
        }
      },
      error: function () {
        $(".otp-input").addClass("error-state");
        $(".otp-err").css("display", "block");
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
    url: `https://nexfive.whjr.one/api/V1/trial/users/minimalFieldRegister?timezone=Asia%2FCalcutta&timestamp=1608107097248&isMobilePlatform=true&mobilePlatform=web`,
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

console.log(isMweb);

// slot section functinality

$(".date-block-container").empty();
const allDataBlocks = slotsData.map((date, index) => {
  let dateBlock =
    '<div class="date-block" id="date-' +
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

var selectedDateIndex;

$(".date-block").click((e) => {
  const id = e.target.id.split("-").slice(-1)[0];
  onDateBlockClick(id);
});

const onDateBlockClick = (id) => {
  $(".date-block").removeClass("active-state");
  $(".day-label").removeClass("active-state");
  $(".month-label").removeClass("active-state");
  $("#date-" + id).addClass("active-state");
  $("#date-" + id + " div .day-label").addClass("active-state");
  $("#date-" + id + " div .month-label").addClass("active-state");
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
      '" class="slot-block-card ' +
      isSlotAvail +
      '"><p class="slot-time">' +
      moment(slot.startTime).format("LT") +
      "</p></div>";

    $(".slots-container").append(slotEle);
  });
  $(".slot-block").click((e) => {
    $(".slot-block").removeClass("active-state");
    id = e.target.id;
    $("#" + id).addClass("active-state");
  });
};

onDateBlockClick(0);


  
  
  
//  </script>