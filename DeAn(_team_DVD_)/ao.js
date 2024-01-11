$(function() {
    //xử lý class cho noidung
        $('.noidung').addClass('');

        // xu ly class cho .momo
        $('.momo').addClass('');
   
   // xu ly cho nut .nut click vao 
   $('.dkhoan').click(function(event) {
        
        //xử lý class cho noidung
        $('.noidung').addClass('noidunghienra');

        // xu ly class cho .momo
        $('.momo').addClass('momodira');
   });

   //jquery cho nut close 
   $('.nutdong, .momo').click(function(event) {
         //xử lý class cho noidung
        $('.noidung').removeClass('noidunghienra');

        // xu ly class cho .momo
        $('.momo').removeClass('momodira');

    }); 
});
// ==================================================================
// ==================================================================
// Hoàng Việt=================phần giỏ hàng======================================
document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các phần tử <p> có class 'sothich1'
    var paragraphs = document.querySelectorAll('.sothich1');
  
    // Lặp qua từng phần tử để thêm sự kiện click
    paragraphs.forEach(function(paragraph) {
      paragraph.addEventListener('click', function() {
        // Xóa class 'underline' khỏi tất cả các phần tử <p> có class 'sothich1'
        paragraphs.forEach(function(p) {
          p.classList.remove('underline');
        });
        
        // Thêm class 'underline' vào phần tử được click
        this.classList.add('underline');
      });
    });
  });
  
// ==========================kết thúc giỏ hàng=====================================================
// ========Phan login hoangViet===================================================================================
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form[action="process-login.php"]');

    form.addEventListener('submit', function(event) {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert("Vui lòng nhập tên đăng nhập và mật khẩu!");
            event.preventDefault();
        } else if (!validatePassword(password)) {
            alert("Mật khẩu không hợp lệ!" );
            alert("Kí tự in hoa đầu, từ 4 đến 18 kí tự, có 1 kí tự đặc biệt (@#$%...)")
            event.preventDefault();
        }
    });

    function validatePassword(password) {
        // Mật khẩu từ 4 đến 12 kí tự, bắt đầu bằng chữ in hoa, có ít nhất 1 kí tự đặc biệt
        var passRegex = /^(?=.*[A-Z])(?=.*[@#$&^><?]).{4,18}$/;
        return passRegex.test(password);
    }
});
// ===========ketthuc phan login=====================================================================================

// ===============Phan chuyen anh cua hoang dung==============================================================================================
document.addEventListener("DOMContentLoaded", function(){
    var imagesContainer = document.querySelector('.hinhto-than');
    var images = document.querySelectorAll('.hinhto1-than');
    var totalImages = images.length;
    var currentImage = 0;

    function nextImage() {
        images[currentImage].style.opacity = '0'; // Ẩn hình ảnh hiện tại
        currentImage = (currentImage + 1) % totalImages;
        images[currentImage].style.opacity = '1'; // Hiển thị hình ảnh tiếp theo
    }

    var imageInterval = setInterval(nextImage, 3000);

    imagesContainer.addEventListener('mouseenter', function() {
        clearInterval(imageInterval);
    });

    imagesContainer.addEventListener('mouseleave', function() {
        imageInterval = setInterval(nextImage, 3000);
    });
});
// 
document.addEventListener("DOMContentLoaded",function(){
    console.log("hello");
    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });
})

 //====================================================================  
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.menu1 ._1menu');

    menuItems.forEach(menuItem => {
        const menuLink = menuItem.querySelector('a');
        const menu2 = menuItem.querySelector('ul');
        const khungDen = menuItem.querySelector('.khungden_0, .khungden_1'); // Thêm .khungden_0 và .khungden_1

        let isHoveringMenu = false;

        menuItem.addEventListener('mouseenter', function() {
            menuItems.forEach(item => {
                if (item !== menuItem) {
                    const otherMenuLink = item.querySelector('a');
                    const otherMenu2 = item.querySelector('ul');
                    const otherKhungDen = item.querySelector('.khungden_0, .khungden_1'); //.khungden_0 và .khungden_1
                    otherMenuLink.style.color = 'white';
                    otherMenu2.style.display = 'none';
                    otherKhungDen.style.visibility = 'hidden';
                }
            });

            menuLink.style.color = 'khaki';
            menu2.style.display = 'block';
            khungDen.style.visibility = 'visible';
            isHoveringMenu = true;
        });

        menuItem.addEventListener('mouseleave', function(event) {
            if (!menuItem.contains(event.relatedTarget) && !isHoveringMenu) {
                menuLink.style.color = 'white';
                menu2.style.display = 'none';
                khungDen.style.visibility = 'hidden';
            }
        });

        menu2.addEventListener('mouseenter', function() {
            isHoveringMenu = true;
        });

        menu2.addEventListener('mouseleave', function(event) {
            if (!menuItem.contains(event.relatedTarget)) {
                if (event.relatedTarget !== null && !event.relatedTarget.closest('ul')) {
                    menuLink.style.color = 'white';
                    menu2.style.display = 'none';
                    khungDen.style.visibility = 'hidden';
                    isHoveringMenu = false;
                }
            }
        });

        khungDen.addEventListener('mouseenter', function() {
            menu2.style.display = 'none';
            khungDen.style.visibility = 'hidden';
        });
    });
});

//  ===========================================================================
document.addEventListener("DOMContentLoaded",function(){
    //view code
    console.log("helo cả nhà");
	var mauden = document.querySelector(".khung_menu");
     console.log(mauden);
    var vitrimd = mauden.offsetTop;
   console.log(vitrimd);

   window.addEventListener('scroll' ,function(){
	var vtchuot = window.pageYOffset;
	console.log(vtchuot);
	if(vtchuot > vitrimd){
	  mauden.classList.add("mauden");
  }
  else{
	 mauden.classList.remove("mauden");
    }  
   })
   //-----------------------------------------------
    //lấy danh sách slide
})
document.addEventListener("DOMContentLoaded", function(){
    var slides = document.querySelectorAll("._slide");
    var slideButtons = document.querySelectorAll("._1nut1");
    var totalSlides = slides.length;
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        slideButtons[currentSlide].classList.remove("kichhoat");
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add("active");
        slideButtons[currentSlide].classList.add("kichhoat");
    }

    function prevSlide() {
        slides[currentSlide].classList.remove("active");
        slideButtons[currentSlide].classList.remove("kichhoat");
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active");
        slideButtons[currentSlide].classList.add("kichhoat");
    }

    for (var i = 0; i < slideButtons.length; i++) {
        slideButtons[i].addEventListener('click', function () {
            clearInterval(slideInterval);

            for (var j = 0; j < slideButtons.length; j++) {
                slideButtons[j].classList.remove("kichhoat");
            }

            this.classList.add("kichhoat");
            var clickedIndex = Array.prototype.indexOf.call(slideButtons, this);

            slides[currentSlide].classList.remove("active");
            slides[clickedIndex].classList.add("active");
            currentSlide = clickedIndex;

            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    for (var i = 0; i < totalSlides; i++) {
        slides[i].addEventListener("mouseenter", function() {
            clearInterval(slideInterval);
        });
        slides[i].addEventListener("mouseleave", function() {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    var nextButton = document.querySelector(".nut-right");
    var prevButton = document.querySelector(".nut-left");

    nextButton.addEventListener('click', function () {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    prevButton.addEventListener('click', function () {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
});
// =======================ketthuc phan hoang dung===================================================


// phần chí dũng=====================phần daily=====================================
// 1. what is API
// 2. How do I call API
// 3. Explain code
const host = "https://provinces.open-api.vn/api/";
var callAPI = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data, "province");
        });
}
callAPI('https://provinces.open-api.vn/api/?depth=1');
// const hosts = "https://provinces.open-api.vn/api/";
var callApiDistrict = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData2(response.data.districts, "district");
        });
}
// callApiDistrict('https://provinces.open-api.vn/api/?depth=1');


// var callApiWard = (api) => {
//     return axios.get(api)
//         .then((response) => {
//             renderData(response.data.wards, "ward");
//         });
// }
var renderData = (array, select) => {
    let row1 = '<option disable value="">Tỉnh / Thành Phố</option>'
    array.forEach(element => {
        row1 += `<option value="${element.code}">${element.name}</option>`
    });
    document.querySelector("#" + select).innerHTML = row1
    // let row1 = '<option disable value="">Quận / Huyện</option>'
    // array.forEach(element => {
    //     row1 += `<option value="${element.code}">${element.name}</option>`
    // });
    // document.querySelector("#" + select).innerHTML = row2
}
var renderData2 = (array, select) => {
    let row2 = '<option disable value="">Quận / Huyện</option>'
    array.forEach(element => {
        row2 += `<option value="${element.code}">${element.name}</option>`
    });
    document.querySelector("#" + select).innerHTML = row2
    // let row1 = '<option disable value="">Quận / Huyện</option>'
    // array.forEach(element => {
    //     row1 += `<option value="${element.code}">${element.name}</option>`
    // });
    // document.querySelector("#" + select).innerHTML = row2
}

$("#province").change(() => {
    callApiDistrict(host + "p/" + $("#province").val() + "?depth=2");
    printResult();
});
$("#district").change(() => {
    callApiWard(host + "d/" + $("#district").val() + "?depth=2");
    printResult();
});
// $("#ward").change(() => {
//     printResult();
// })

var printResult = () => {
    if ($("#district").val() != "" && $("#province").val() != "" &&
        $("#ward").val() != "") {
        let result = $("#province option:selected").text() +
            " | " + $("#district option:selected").text();
        $("#result").text(result)
    }

}

//======================================================================== 