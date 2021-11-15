{
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.counterup/1.0/jquery.counterup.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script>
 
  
  
  
 </script> */
}

// scroll animation
AOS.init();

//realted to counter on stats
$(".counter").counterUp({
  delay: 10,
  time: 1500,
});
$(".counter").addClass("animated fadeInDownBig");
$("h3").addClass("animated fadeIn");

var dialCode = "+91",
  country = "IN";

//curriculum functionality
  var isMweb = window.screen.width < 500;
$(".grade-card").click((e) => {
  e.preventDefault();
  const id = e.target.id;
  selectingCourseTab(id);
});

$("#grade-select").change((e) => {
  console.log(e);
  selectingCourseTab(e.target.value);
  isMweb = true;
});

function selectingCourseTab(id) {
  Selectedgrade = id.split("").slice(-1)[0];
  const gradeCards = document.getElementsByClassName("grade-card");
  $(".grade-card").removeClass("active-grade");
  $("#" + id).addClass("active-grade");
  if (window.screen.width < 500) {
    isMweb = true;
  }

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

//side pannel code

$(".schedule-cta").click(() => {
  $(".sidepanel-container").css("display", "block");
  $("body").css("overflow", "hidden");
  window.scrollTo(0, 0);
  $(".parent-mobile-num").val(parentMobileNum);
});

$(".sidepannel-close").click(() => {
  $("body").css("overflow", "auto");
  $(".sidepanel-container").css("display", "none");
});

//form functionality
var parentMobileNum = "",
  selectedSubj,
  selectedGrade,
  otpValue = "",
  isUserExist;

$(".parent-mobile-num").on("input", (e) => {
  if (e.target.value.length > 9) {
    const vaild = $.isNumeric(e.target.value);
    parentMobileNum = e.target.value;
    isExist();

    if ($.isNumeric(e.target.value)) {
      parentMobileNum = e.target.value;
      isExist();
      $(".err-msg-pm").css("display", "none");
      $(".parent-num").removeClass("error-state");
      $(".parent-num-dropdown").removeClass("error-state");
      $(".parent-mobile-num").removeClass("error-state");
    } else {
      $(".err-msg-pm").css("display", "block");
      $(".parent-num").addClass("error-state");
      $(".parent-num-dropdown").addClass("error-state");
      $(".parent-mobile-num").addClass("error-state");
    }
  }
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

$(".subject-card-sp").click((e) => {
  selectedSubj = e.target.id;
  $(".subject-card-sp").removeClass("active-state");
  $("#" + selectedSubj).addClass("active-state");
});

$(".grade-card-sp").click((e) => {
  selectedGrade = e.target.id.split("-").slice(-1)[0];
  $(".grade-card-sp").removeClass("active-state");
  $(".grade-name").removeClass("active-state");
  $("#grade-" + selectedGrade).addClass("active-state");
  $("#sp-grade-" + selectedGrade).addClass("active-state");
  $("#grade-" + selectedGrade + " div .grade-name").addClass("active-state");
  $("#sp-grade-" + selectedGrade + " div .grade-name").addClass("active-state");
});

$(".sp-initial-cta").click(() => {
  $.ajax({
    type: "POST",
    url:
      "https://nexfive.whjr.one/api/V1/otp/generate?regionId=" +
      country +
      "&courseType=MATH&brandId=whitehatjr",
    cache: false,
    data: { dialCode, mobile: parentMobileNum },

    success: function () {
      $(".sp-initial-form").css("display", "none");
      $(".otp-container").css("display", "block");
      $(".selected-num-display").text("+91 " + parentMobileNum);
    },
  });
});

$(".otp-input").on("input", (e) => {
  otpValue = "";

  $(".otp-input").removeClass("error-state");
  $(".otp-err").css("display", "none");
  if (!e.target.nextElementSibling) {
    for (var i = 1; i < 5; i++) {
      otpValue += $("#otp-" + i).val();
    }
    $.ajax({
      type: "POST",
      url: "https://nexfive.whjr.one/api/V1/otp/verify",
      cache: false,
      data: { dialCode, mobile: parentMobileNum, otp: otpValue },

      success: function () {
        $(".otp-container").css("display", "none");
        $(".side-panel-slot").css("display", "block");
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

$(".back-arrow").click(() => {
  $(".sp-initial-form").css("display", "block");
  $(".side-panel-slot").css("display", "none");
});

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
    '</p></div>'

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

// this is something

const customClassMethod = (toClass, isAddClass, whichClass) => {
  if (isAddClass) {
    $(`${type}${toClass}`).addClass(whichClass);
  } else {
    $(`${type}${toClass}`).removeClass(whichClass);
  }
};

const customCssMethod = (toclass, lhs, rhs) => {
  $(toclass).css(lhs, rhs);
};

var parentMobileNum = "",
  selectedSubj = "math",
  selectedGrade,
  otpValue = "",
  isUserExist;

$(`.${selectedSubj}-block`).addClass("active-state");
$(".subject-card-sp").click((e) => {
  $(".subject-card-sp").removeClass("active-state");
  $(`#${e.target.id}`).addClass("active-state");
  selectedSubj = e.target.id;
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
  customClassMethod(".grade-block", false, "active-state");
  customClassMethod("#grade-" + selectedGrade, true, "active-state");
});

$(".sp-initial-cta").click(() => {
  getOtp(spInitialCtaSuccess);
});

$(".mweb-sp-initial-cta").click(() => {
  getOtp(mwebSpinitilacta);
});

const mwebSpinitilacta = () => {
  $(".mweb-otp-container").css("display", "block");
  $(".otp-user-exist-msg").css("display", isUserExist ? "block" : "none");
};

const spInitialCtaSuccess = () => {
  $(".sp-initial-form").css("display", "none");
  $(".otp-container").css("display", "block");
  $(".selected-num-display").text("+91 " + parentMobileNum);
};

const getOtp = (callback) => {
  $.ajax({
    type: "POST",
    url:
      "https://nexfive.whjr.one/api/V1/otp/generate?regionId=" +
      country +
      "&courseType=MATH&brandId=whitehatjr",
    cache: false,
    data: { dialCode, mobile: parentMobileNum },

    success: callback,
  });
};

$("mweb-otp-close").click(() => {
  $(".mweb-otp-container").css("display", "none");
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

const handleGetSlots = () => {
  $.ajax({
    type: "GET",
    url: `https://nexfive.whjr.one/api/V1/trial/slots/get?countryCode=IN&grade=${selectedGrade}&timezone=Asia/Calcutta&courseType=${selectedSubj}`,
    cache: false,

    success: function (res) {
      slotsData = res.data.slots;
    },
  });
};

// const handleBookSlots = () => {

// }







<script src="https://cdn.jsdelivr.net/gh/Ashwin-toppr/bfs-marketing-scripts/scripts/Untitled-1.js"></script>


//    Extract number from string
//     </title>
// </head>
  
// <body >
//     <div align="center" style="background-color: green;">
          
//         <h1>GeeksforGeeks</h1>
          
//         <p>String is "jhkj7682834"</p>
          
//         <p id="GFG"> 
//             Click the button to extract number
//         </p>
          
//         <input type="button" value="click " onclick="myGeeks()">
//     </div>
      
//     <script>
//         function myGeeks() {
//             var str = "jhkj7682834";
//             var matches = str.match(/(\d+)/);
              
//             if (matches) {
//                 document.getElementById('GFG').innerHTML
//                         = matches[0];
//             }
//         }



  // const input = e.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
  // const areaCode = input.substring(0, 3);
  // const middle = input.substring(3, 6);
  // const last = input.substring(6, 10);

  // if (input.length > 6) {
  //   e.target.value = `(${areaCode})  ${middle} - ${last}`;
  // } else if (input.length > 3) {
  //   e.target.value = `(${areaCode})  ${middle}`;
  // } else if (input.length > 0) {
  //   e.target.value = `(${areaCode}`;
  // }