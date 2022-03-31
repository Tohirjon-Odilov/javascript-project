let data = JSON.stringify({
    avatar: "img/1.png",
    name: "Jeki Chan",
    address: 'New York Holis 33',
    job: "Full stack Developer",
    stars: 4,
    email: "rumar234@gmail.com",
    phone: "+993888432",
    birthday: "02/01/2003",
    skills: ["Backend", "Forntend", "C++", "IOS", "BG", "API"]
})

localStorage.setItem("user", data)

$(document).ready(() => {
    $(".modal").hide();
    let user = JSON.parse(localStorage.getItem("user"))
    $("#avatar")[0].src = user.avatar;
    $("#avatar")[0].style.width = "48px";
    $("#avatar1")[0].src = user.avatar;
    // let name = $("#name1").value
    // console.log(name)
    $("#name")[0].innerHTML = user.name;
    // $("#name2")[0].innerHTML = user.name;
    // $("#address")[0].innerHTML = user.address;
    $("#job")[0].innerHTML = user.job;
    // for (let i = 0; i < user.stars.length; i++) {
    //     $('#starss')[i].style.color = "red"
    // }
    // console.log($('#starss')[i])
    $("#stars")[0].innerHTML = user.stars;
    $("#email")[0].innerHTML = user.email;
    $("#phone")[0].innerHTML = user.phone;
    $("#birthday")[0].innerHTML = user.birthday;
    for (let i = 0; i < user.skills.length; i++) {
        $(".skills").append(`<div class="tag">${user.skills[i]}</div>`)
    }
})
$("#edit").click(function() {
    $(".modal").slideToggle()
})
$(".close").click(function() {
    $(".modal").slideToggle()
})