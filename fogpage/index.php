<!DOCTYPE html>
<html lang="en" >
   <head>
      <meta charset="UTF-8">
      <title>Slider.js (Carousel for div and html elements)</title>
      <link href='https://fonts.googleapis.com/css?family=Sriracha' rel='stylesheet'>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="<?php bloginfo('template_url')?>/style.css">
   </head>
   <body>
      <body>
         <div class="slides">
            <section class="page1">
               <img class="fog fog1" src="http://img13.deviantart.net/b5ed/i/2013/033/d/0/cloud_fog_by_moonglowlilly-d5tk3l7.png">
               <img class="fog fog2" src="http://img13.deviantart.net/b5ed/i/2013/033/d/0/cloud_fog_by_moonglowlilly-d5tk3l7.png">
               <img class="fog fog3" src="http://img13.deviantart.net/b5ed/i/2013/033/d/0/cloud_fog_by_moonglowlilly-d5tk3l7.png">
               <h2>
                  <div class="container">
                     <div class="row">
                        <div class="col-8" id="layout_style_one">
                           1 of 2
                        </div>
                        <div class="col-3">
                           <?php
                              if(have_posts()) {
                                while(have_posts()) {
                                  the_post();
                                   if(get_the_id() == 56){
                                     echo the_title()."<br>"; // tittle
                                     echo the_content();  // content
                                   }
                                 }
                               }
                              ?>
                        </div>
                     </div>
                  </div>
               </h2>
            </section>
            <section class="page2 slidepage">
              <h2>
                <div class="container">
                   <div class="row">
                      <div class="col-6" id="layout_style_one">
                         <img src="https://scontent-fbkk5-7.us-fbcdn.net/v1/t.1-48/1426l78O9684I4108ZPH0J4S8_842023153_K1DlXQOI5DHP/dskvvc.qpjhg.xmwo/w/data/1027/1027536-img.sgb2t5.pf3k.jpg">
                      </div>
                      <div class="col-3">
                         2-2
                      </div>
                   </div>
                </div>
              </h2>
            </section>
            <section class="page3 slidepage">
               <h2>Page 3 (But for Content)</h2>
            </section>
            <section class="page4 slidepage">
               <h2>Page 4 (Partial/FullPage)</h2>
            </section>
            <section class="page5 slidepage">
               <h2>Page 5 (Vertical/Horizontal)</h2>
            </section>
            <section class="page5 slidepage">
               <h2>Page 6 (Vertical/Horizontal)</h2>
            </section>
         </div>
   </body>
</html>
<script  src="<?php bloginfo('template_url')?>/myscripts.js"></script>
</body>
</html>
