<template>
  <div>
      <div style="width: 100%" class="bg-white"><q-img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/white-copy-9-1.png" style="width: 90px; height: 42px ;" class="q-ma- q-ml-xl" />
         <ul class="menu text-weight-bolder row inline">
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
            <div class="logo1">
              <q-icon size="28px" name="work_outline"/> <sup>o</sup>
            </div>
          </div>
      </div>
      <div class="big-container">
       <div class="body  row  justify-center ">
          <div class="get-the fit row  justify-center q-pt-xl">
            <div class="text-h3 text-weight-bolder">
              Get The Boot A Birds Eye Look <br> Into Mcse Boot Camps <br>
              <span style="font-size: 17px">February 18, 2019</span> <br>
              <q-img width="570px" height="400px" src="https://xtrm.foxthemes.me/wp-content/uploads/2019/02/group-16-copy-10.jpg" class="q-mt-lg"/>
            </div>
            <div class="text row q-mt-lg">
                Aliquam nec ultrices quam. Morbi accumsan nisl a augue pretium lacinia. Vestibulum tincidunt facilisis euismod. Mauris scelerisque nisi mi, quis blandit sem interdum at. Vestibulum ornare libero et nulla faucibus, vel imperdiet urna imperdiet. <br><br>

                Nunc sed erat pretium, varius massa non, condimentum risus. Maecenas hendrerit urna a magna varius, at molestie est dapibus. Morbi varius condimentum ornare. Pellentesque convallis nunc at condimentum egestas. Curabitur vehicula cursus porttitor. Sed aliquam fermentum urna eget iaculis. Sed in urna quis dui ultrices dapibus tincidunt luctus dui. Aliquam erat volutpat. Ut dui ante, viverra ut ante at, maximus sagittis arcu. Cras ut sapien consectetur, imperdiet arcu mattis, pellentesque nunc. Nulla mollis orci ipsum, non pretium magna dapibus nec. Proin aliquet posuere eros a hendrerit. <br><br><br><br><br><br><br><br>

                <div class="text-h4 q-mb-xl">Leave a comment</div> <br>
                <div class="row">
                  <q-input style="width:380px" outlined v-model="text" label="Your name" />
                  <q-input style="width:365px" class="q-ml-md" outlined v-model="text" label="Your email" />
                  <input style="width:760px; height: 130px;" class="input2 q-mt-xl" placeholder="" />
                  <button class="q-mt-xl button1">Post comment</button>
                </div>
              </div>

          </div>
        <div class="ful fit post">
         <div class=" fit row wrap justify-center">
         <div class="  justify-around" style="width: 400px; height: 200px">
           <div class="nextpost q-mt-xl">Previous post</div>
           <div class="text-h6 buying">Computer Hardwere Desktops And Handhelds Oh My</div>
         </div>
          <div class=" justify-around " style="width: 650px; height: 100px">
            <div class="nextpost text-right q-mt-xl">Next post</div>
            <div class="text-h6 buyingg text-right">Buying Used Electronic Test Equipment What S The Difference Between Used Refurbished Remarketed And Rebuilt</div>
          </div>
         </div>
         </div>
        </div>
       </div>

      <!-- <div style="margin-top: 1300px" class="bg_bgdark"></div> -->

    <div class="bg-dark" style="width:100%; height: 500px">
      <div class="q-pa-xl" style=" height: 200px">
         <div class=" wrap justify-center" style="width: 70%; height: 500px; margin-left: 200px;">
           <div class="text-h5 q-pa-xl" style="color: white">newsletter</div>
           <div class="q-ml-xl" style="color: white">A well-executed brand strategy affects all aspects of a business and is <br> connected to consumer needs & emotions.</div>
             <div class="row q-mt-xl q-ml-lg">
                 <q-input style="width:405px" class="q-ml-md inpx" outlined v-model="text" label="Your email" />
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

</script>

<style scoped>
.big-container{
  padding: 40px;
  background-color: #f0f0f0;
}
  .menu, li{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  /* font-size: 15px; */
  list-style-type: none;
  padding: 25px;
  color: rgb(66, 63, 63);
}
.menu :hover{
  color: rgb(255, 81, 0);
  cursor: pointer;
  transition: 0.1s;

}
.menu{
  padding: 0;
  margin-left: 300px;
}
.logo1{
  margin-left: 20px;

}
.get-the{
  background-color: #ffffff;
}

.body{
  width: 90%;
  background-color: #d3b3b3;
  margin: 60px;
}
.text{
  width: 68%;
  font-size: 15px;
  margin-left: 100px;
}
.input{
  display: flex;
  width: 900px;

}
.button1{
    padding: 17px 50px;
    color: #ffffff;
    background-color: #f56923;
    border: none;
    transition: 0.6s;
}
.button1:hover{
    background-color: #ffffff;
    color: rgb(255, 94, 0);
    border: solid 1px rgb(255, 94, 0);
    background-position: right;
    transition: 0.6s;

}
.nextpost:hover{
  color: #f56923;
  cursor: pointer;
  /* width: 100px; */
}
.buying:hover{
  margin-left: 10px ;
  transition: 0.5s;
}
.buying{
  transition: 0.5s;
}
.buyingg:hover{
  margin-right: 10px ;
  transition: 0.5s;
}
.buyingg{
  transition: 0.5s;
}
.post{
  background-color: #ffffff;
}
.inpx{
  background-color: #ffffff;
}
</style>
