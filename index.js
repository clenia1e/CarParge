


const selectedAuto = () => {
    var selectTitle = document.getElementById("title")
    let select = document.getElementById("select-cars")
    let selectText = select.options[select.selectedIndex].text
    let selectYears = document.getElementById("select-years").value
    var selectValue = document.getElementById("select-cars").value
    var resultImg = document.getElementById("car-img")
    const selectButton = document.getElementById("select-button")

    var img = document.getElementById('Auto')

    console.log('o select', selectValue)
    if (selectValue == "230000") {
        console.log(img)
        resultImg.innerHTML = `<img id='Auto' src='img/compass.png' />`

    } else if (selectValue == "400000") {
        resultImg.innerHTML = `<img id='Auto' src='img/grand.png' />`
    } else {
        resultImg.innerHTML = `<img id='Auto' src='img/renegade.png' />`
    }
    selectTitle.innerHTML = ` <h1 class="car-title">  ${selectText} ${selectYears} </h1>`

}

const simulate = () => {
    let select = document.getElementById("select-cars")
    let selectValue = select.value
    let selectYears = document.getElementById("select-years").value
    let paymentValue = document.getElementById("select-payment").value
    let resultPrice = document.getElementById("result-price")
    let resultYears
    let totalPayment
    console.log(selectYears)

    if(selectValue == "" || selectYears == "" || paymentValue == ""){
        window.alert('Fill all spaces first!')
    }else{
        switch (selectYears) {

            case "2022":
                 resultYears = Number(selectValue) + 10000
            break;

            case "2021":
                resultYears = Number(selectValue) + 5000
            break;

            case "2020":
                resultYears = Number(selectValue) - 10000
            break;
        }
        switch (paymentValue) {

            case "1":
                totalPayment = resultYears
            break;

            case "2":
                totalPayment = resultYears + 80000
            break;
        }
           
    console.log(totalPayment)
    resultPrice.innerHTML = ` <p class="total-style">   Total:  </p>  <p class="price-style"> R$ ${totalPayment},00  </p>`
    }
}

const buy = () => {
    let select = document.getElementById("select-cars")
    const selectText = select.options[select.selectedIndex].text
    let selectValue = select.value
    let selectYearsValue = document.getElementById("select-years").value
    let paymentValue = document.getElementById("select-payment").value
    let purchaseFinish = document.getElementById("purchase-finish")

    if(selectValue == "" || selectYearsValue == "" || paymentValue == ""){
        window.alert('Fill all spaces first!')
    }else{
    window.alert(` You bought ${selectText} ${selectYearsValue} `)
    }
}