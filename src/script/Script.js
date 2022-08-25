export default function Script(){
    this.screenWidth = window.innerWidth
    this.width = 33
    
    this.setScreenWidth = function(){
        this.screenWidth = window.innerWidth
        if(this.screenWidth <= 420){
            this.width = 90
        }else if(this.screenWidth <= 520 && this.screenWidth > 421){
            this.width = 80
        }else if(this.screenWidth <= 620 && this.screenWidth > 521){
            this.width = 70
        }else if(this.screenWidth <= 720 && this.screenWidth > 621){
            this.width = 50
        }else if(this.screenWidth <= 820 && this.screenWidth > 721){
            this.width = 50
        }else if(this.screenWidth <= 1120 && this.screenWidth > 821){
            this.width = 43
        }else if(this.screenWidth >= 1121){
            this.width = 33
        }
    }

    this.setSlide = function(className){
        this.setScreenWidth()

        const slide = document.querySelector(`.${className}`)

        if(slide){
            const slideItems = slide.querySelectorAll('.flex-row .item')
            const slideWidth = this.width * slideItems.length
            slide.style.width = slideWidth + '%'
            slideItems.forEach((element)=>{
                element.style.width = `${this.width}%`
            })
            // console.log(slideItems.length)
            // console.log('found')
        }

        setTimeout(()=>{
            this.setSlide(className)
        },)
    }

    this.log = () => console.log('here')
}