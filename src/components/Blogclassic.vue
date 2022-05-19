<template>
<div>
    <div class="bik-container">
    <div class="big-container ful">
      <header class=" row inline headerr">
        <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/white-copy-9-1.png" alt="" style="width: 85px; height: 45px ;" class="q-mt-md q-ml-xl logo">
        <nav class="top-menu">
          <ul class="menu text-weight-bolder row inline q-ml-xl q-mt-lg">
            <li style="font-size: 15px;"><a href="#"></a> Home</li>
            <li><a href="#"></a> Pages</li>
            <li><a href="#"></a> Showcases</li>
            <li><a href="#"></a> Blog</li>
            <li><a href="#"></a> Shop</li>
            <li><a href="#"></a> Pricing</li>
            <li><a href="#"></a> Contact US</li>
          </ul>
          <div class="row inline q-ml-xl icon">
            <q-icon size="28px" name="search"/>
            <div class="q-ml-lg">
              <q-icon size="28px" name="work_outline"/> <sup>o</sup>
            </div>
          </div>
        </nav>
      </header>
      <div class="kattalashtirish" style="position:absolute;  top:0px;color:white">
        <span class="q-ml-xl q-pl-xl">BLOG</span><br><br>
        <div class="jakuy ">
          <div class="q-ml-xl  q-pl-xl "><br>
            <div class="text-h2 text-bold ">
              <span>Blog</span>
              <span class="bg-orange-10 q-ml-md">Classic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fit row wrap justify-center items-start q-mt-xl ">
    <div v-for="card in cards" :key="card" class=" white shadow-20 q-mb-xl" style="width:29%; height:450px">
      <q-img class="content" width="100%"  :src="card.img"/>
      <div class="text-h6 q-ml-xl" style="margin-top: 30px">What Makes A Hotel Boutique <br> Now?</div> <br><br>
       <div><span class="q-ml-lg">4 year ago</span></div>
       <q-btn class="bg-orange-9 color-white" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom: 1315px; left: 100px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; top: 1009px; left: 110px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom:  810px; left: 110px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom: 810px; left: 520px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom: 1765px; left: 920px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom: 810px; left: 920px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom: 1310px; left: 920px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom: 1310px; left: 510px" />
       <q-btn class="bg-orange-9" color="dark" label="Sk Trail Reviews" style="position:absolute; bottom: 1770px; left: 505px" />
    </div>
  </div>
     <div class="bg-dark q-pa-xl" style="width:100%; height: 500px">
      <div style=" height: 200px">
         <div class=" wrap justify-center" style="width: 70%; height: 500px; margin-left: 100px;">
           <div class="text-h5 q-mt-xl" style="color: white">newsletter</div>
           <div class="q-mt-xl " style="color: white ">A well-executed brand strategy affects all aspects of a business and is <br> connected to consumer needs & emotions.</div>
             <div class="row q-mt-xl">
                 <q-input style="width:405px" class="bg-white" outlined v-model="text" label="Your email" />
                 <q-btn icon="arrow_right_alt" class="bg-orange" color="white"/>
             </div>
             <div class="q-mt-xl row" style="color: white">© XTRM. All Right Reserved 2019.
               <div class="" style="margin-left: 680px">
                 <q-icon class="q-ma-sm" size="23px" name="fab fa-twitter-square"></q-icon>
                 <q-icon class="q-ma-sm" size="23px" name="fab fa-facebook-square"></q-icon>
                 <q-icon class="q-ma-sm" size="23px" name="fab fa-instagram-square"></q-icon>
                 <q-icon class="q-ma-sm" size="23px" name="fab fa-google-plus-square"></q-icon>
                 <q-icon class="q-ma-sm" size="23px" name="fab fa-pinterest-p"></q-icon>
               </div>
             </div>
          </div>
      </div>

    </div>
</div>

</template>

<script>
  export default{
    data() {
      return {
       cards: [
         {img: "https://xtrm.foxthemes.me/wp-content/uploads/2018/07/3-1.jpg"},
          {img: "	https://xtrm.foxthemes.me/wp-content/uploads/2018/07/2-1.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2018/07/1.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-16.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2018/10/groupdd-16.jpg"},
          {img: "	https://xtrm.foxthemes.me/wp-content/uploads/2018/10/groupd-16.jpg"},
          {img: "	https://xtrm.foxthemes.me/wp-content/uploads/2019/01/groupz-16.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2019/01/groxup-16.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2019/01/groxup-16.jpg"},



       ]
      }
    },
  }
</script>

<style scoped>
    .menu, li{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  /* font-size: 15px; */
  list-style-type: none;
  padding: 25px;
  color: white;

}

.menu :hover{
  color: rgb(255, 81, 0);
  cursor: pointer;
  border-bottom: 3px solid rgb(255, 81, 0);
  transition: 0.1s;
}
.menu{
  padding: 0;
  margin-left: 115px;
}
.logo{
  margin-left: 95px;
  margin-top: 30px;
}
.icon{
  margin-left: 145px;
  color: aliceblue;
}

.headerr{
  border-bottom: 1px solid rgba(119, 114, 114, 0.615);
  height: 100px;
  width: 100%;


}
.bik-container{
  background-image: url(	https://xtrm.foxthemes.me/wp-content/uploads/2019/02/Group13236-1.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.jakuy{
  background: url(https://xtrm.foxthemes.me/wp-content/uploads/2019/01/road.png);
  width: 50%;
  height: 70px;

}
.kattalashtirish{
  width: 100%;
  height: 400px;
  margin-top: 300px;

}
.span2{
  background-color: rgb(228, 99, 7);
  padding: 10px;

}
.content{
  margin-right: 30px;
}
.white{
  margin-left: 20px;
}
</style>
