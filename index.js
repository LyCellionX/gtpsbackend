<!DOCTYPE html>
<html lang="en" style="background-color: rgba(0, 0, 0, 0); width: 100%; height: 100%">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Growtopia Player Support</title>
    <link rel="icon" type="image/png" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" sizes="16x16" />
    <link rel="shortcut icon" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" type="image/x-icon" />
    <link rel="icon" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" type="image/x-icon" />

    <!-- include bootstrap and custom  css -->
    <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/faq-main.css" />
    <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/shop-custom.css" />
    <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/ingame-custom.css" />
    <style>
      .modal-backdrop {
        background-color: rgba(0, 0, 0, 0.1);
      }
      .modal-backdrop + div {
        overflow: auto;
      }
      .modal-body,
      .content {
        padding: 0;
      }
      .btn-container {
        text-align: center;
        margin-top: 30px;
      }
      .grow-button {
        margin: 10px;
        width: 200px;
      }
    </style>
  </head>
  <body style="background-color: rgba(0, 0, 0, 0)">
    <button type="button" class="btn btn-primary hidden" data-toggle="modal" id="modalButton" data-target="#modalShow" data-backdrop="static" data-keyboard="false"></button>
    <div class="content">
      <section class="common-box">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="row">
                <div class="modal fade product-list-popup" id="modalShow" tabindex="-1" role="dialog" aria-hidden="false">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div class="content">
                          <section class="common-box">
                            <div class="container">
                              <div class="section-title center-align">
                                <h2>Welcome to Growtopia Player Support</h2>
                              </div>
                              <div class="row div-content-center">
                                <div class="col-md-12 col-sm-12">
                                  <!-- Button Container -->
                                  <div class="btn-container">
                                    <button class="btn btn-lg btn-primary grow-button" onclick="window.location.href='/player/login/dashboard'">Login</button>
                                    <button class="btn btn-lg btn-primary grow-button" onclick="window.location.href='https://growlycik.vercel.app/player/growid/login/validate'">Already/Create Account</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- JQUERY LIBRARY -->
    <script src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/vendors/jquery/jquery-2.1.4.min.js"></script>
    <!-- boostrap javascript -->
    <script src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/vendors/bootstrap/javascripts/bootstrap.min.js"></script>
    <script>
      $('document').ready(function () {
        $('#modalButton').trigger('click');
      });
    </script>
  </body>
</html>
