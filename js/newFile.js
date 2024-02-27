document.addEventListener('DOMContentLoaded', function () {
  // Function to update content based on hash fragment
  function updateContent () {
    const hash = window.location.hash.substring(1)
    const contentContainer = document.getElementById('contentContainer')

    if (hash === '') {
      fetch('../js/countries/country_list.json')
        .then(response => response.json())
        .then(countryList => {
          // Create a string with the HTML content
          const countryListContent = countryList
            .map(
              country => `
      <!--Block-->
      <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
          <div class="inner-box">
              <div class="lower-box">
                  <h4><a href="#${country.replace(
                    / /g,
                    '_'
                  )}">${country}</a></h4>
                  <div class="phone">
                      <a href="#${country.replace(
                        / /g,
                        '_'
                      )}" class="theme-btn call-btn"><i class="icon"><img
                                  src="../images/countries/${country}.png" alt="${country}" title="${country}"></i></a>
                  </div>
              </div>
          </div>
      </div>
    `
            )
            .join('\n')

          // If there's no hash, show a card or default content
          contentContainer.innerHTML = `
      <section class="inner-banner">
      <div class="image-layer" style="background-image: url(../images/travel/explore-wide.jpg);"></div>
      <div class="auto-container">
          <div class="content-box">
              <h2>Discover and fulfill your visa requirements with ease</h2>
              <div class="bread-crumb">
                  <ul class="clearfix">
                      <li><span class="icon-home fa fa-home"></span><a href="/">Home</a></li>
                      <li class="current"><a href="../visas">Visa</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  <!--End Banner Section -->

  <!--Team Section-->
  <section class="team-section team-page">

      <div class="floated-icon left"><img src="../images/resource/stones-left.svg" alt="" title=""></div>
      <div class="floated-icon right"><img src="../images/resource/stones-right-2.svg" alt="" title=""></div>
      <div class="auto-container">
          <div class="content-box">
              <div class="row clearfix" style="justify-content: center;">
                  <!--Block-->
                 ${countryListContent}

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#Belgium_Visa_Schengen">Belgium Visa-Schengen</a></h4>
                              <div class="phone">
                                  <a href="#Belgium_Visa_Schengen" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Belgium Visa-Schengen.png"
                                              alt="Belgium_Visa_Schengen" title="Belgium_Visa_Schengen"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">

                          <div class="lower-box">
                              <h4><a href="./austria-visa-schengen.html">Austria Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="./../images/countries/Austria Visa - Schengen.png"
                                              alt="Austria Visa - Schengen" title="Austria Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">

                          <div class="lower-box">
                              <h4><a href="#">Bosnia and Herzegovina Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Bosnia and Herzegovina Visa.png"
                                              alt="Bosnia and Herzegovina Visa"
                                              title="Bosnia and Herzegovina Visa"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Brazil Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Brazil Visa.png" alt="Brazil Visa"
                                              title="Brazil Visa"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>


                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Canada Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Canada Visa.png" alt="Canada Visa"
                                              title="Canada Visa"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">China Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/China Visa.png" alt="China Visa"
                                              title="China Visa"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Cyprus Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Cyprus Visa.png" alt="Cyprus Visa"
                                              title="Cyprus Visa"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Czech Republic Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Czech Republic Visa - Schengen.png"
                                              alt="Czech Republic Visa - Schengen"
                                              title="Czech Republic Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>


                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Denmark Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Denmark Visa - Schengen.png"
                                              alt="Denmark Visa - Schengen" title="Denmark Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Estonia Visa – Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Estonia Visa – Schengen.png"
                                              alt="Estonia Visa – Schengen" title="Estonia Visa – Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Finland Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Finland Visa - Schengen.png"
                                              alt="Finland Visa - Schengen" title="Finland Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">France Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/France Visa - Schengen.png"
                                              alt="France Visa - Schengen" title="France Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Germany Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Germany Visa - Schengen.png"
                                              alt="Germany Visa - Schengen" title="Germany Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Greece Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Greece Visa - Schengen.png" alt="Greece Visa"
                                              title="Greece Visa"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Hungary Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Hungary Visa - Schengen.png"
                                              alt="Hungary Visa - Schengen" title="Hungary Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Iceland Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Iceland Visa - Schengen.jpg"
                                              alt="Iceland Visa - Schengen" title="Iceland Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">india</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/india.jpg" alt="india" title="india"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Ireland Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Ireland Visa.png" alt="Ireland Visa"
                                              title="Ireland Visa"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Italy Visa – Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Italy Visa – Schengen.png"
                                              alt="Italy Visa – Schengen" title="Italy Visa – Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Netherland Visa – Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Netherland Visa – Schengen.png"
                                              alt="Netherland Visa – Schengen"
                                              title="Netherland Visa – Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Norway Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Norway Visa - Schengen.png"
                                              alt="Norway Visa - Schengen" title="Norway Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Poland Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Poland Visa - Schengen.png"
                                              alt="Poland Visa - Schengen" title="Poland Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Portugal Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Portugal Visa - Schengen.jpg"
                                              alt="Portugal Visa - Schengen" title="Portugal Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Serbia Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Serbia Visa.png" alt="Serbia Visa"
                                              title="Serbia Visa"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">South Korea Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/South Korea Visa.png" alt="South Korea Visa"
                                              title="South Korea Visa"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>
                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Spain Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Spain Visa - Schengen.png" alt="Spain Visa"
                                              title="Spain Visa"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Sweden Visa – Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Sweden Visa – Schengen.png"
                                              alt="Sweden Visa – Schengen" title="Sweden Visa – Schengen"></i></a>
                              </div>
                          </div>
                      </div>

                  </div>

                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Switzerland Visa - Schengen</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Switzerland Visa - Schengen.jpg"
                                              alt="Switzerland Visa - Schengen"
                                              title="Switzerland Visa - Schengen"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">Turkey Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/Turkey Visa.png" alt="Turkey Visa"
                                              title="Turkey Visa"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">UAE Visit Visa</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/UAE Visit Visa.png" alt="UAE Visit Visa"
                                              title="UAE Visit Visa"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--Block-->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">UK Visa – United Kingdom</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/UK Visa – United Kingdom.png"
                                              alt="UK Visa – United Kingdom" title="UK Visa – United Kingdom"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- Block -->
                  <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
                      <div class="inner-box">
                          <div class="lower-box">
                              <h4><a href="#">USA Visa - United States of America</a></h4>
                              <div class="phone">
                                  <a href="#" class="theme-btn call-btn"><i class="icon"><img
                                              src="../images/countries/USA Visa - United States of America.jpg"
                                              alt="USA Visa - United States of America"
                                              title="USA Visa - United States of America"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
         
        `
        })
        .catch(error => console.error('Error fetching country list:', error))
    } else {
      // If there's a hash, fetch and show details for the selected country
      fetch(`../js/countries/${hash.toLowerCase()}.json`)
        .then(response => response.json())
        .then(data => {
          contentContainer.innerHTML = `
          <section class="inner-banner">
          <div class="image-layer" style="background-image: url(../images/travel/travel.jpg);"></div>
          <div class="auto-container">
              <div class="content-box">
                  <h2>${data.Country}</h2>
                  <div class="bread-crumb">
                      <ul class="clearfix">
                          <li><span class="icon-home fa fa-home"></span><a href="/">Home</a></li>
                          <li><a href="../visas">Visa</a></li>

                          <li class="current">${data.Country}</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <!--End Banner Section -->
      <!-- Package Detail Section -->
      <section class="package-detail-section">
          <div class="auto-container">
              <div class="row clearfix">
                  <!-- Content Column -->
                  <div class="content-column col-xl-8 col-lg-7 col-md-12 col-sm-12">
                      <!-- Rating Box -->
                      <h5>${data.Official_Name}</h5>
                      <p>${data.Country_Description}
                      </p>
                      <div class="feature-box">
                          <h5>Required Documents</h5>
                          <ul class="feature-list">
                          ${data.Required_Documents.map(
                            doc => `<li>${doc}</li>`
                          ).join('\n')}

                          </ul>
                      </div>
                      <div class="feature-box">
                      <h5>Supporting Documents</h5>
                      ${Object.entries(data.Supporting_Documents)
                        .map(
                          ([category, documents]) => `
        <ul class="feature-list">
          <h6><b>${category}</b></h6>
          ${documents.map(doc => `<li>${doc}</li>`).join('\n')}
        </ul><br>
      `
                        )
                        .join('\n')}
                      <br>
                  </div>
                      <div class="feature-box">
                          <h5>Fineway Travel's Assistance</h5>
                          <ul class="feature-list">
                          ${data.Fineway_Assistance.map(
                            doc => `<li>${doc}</li>`
                          ).join('\n')}

                          </ul>
                      </div>
                      <div class="feature-box">
                          <h5>General Conditions</h5>
                          <ul class="feature-list">
                             ${data.General_Conditions.map(
                               doc => `<li>${doc}</li>`
                             ).join('\n')}
                          </ul>
                      </div>


                      <!-- End Itinerary Box -->
                  </div>
                  <!-- Sidebar Column -->
                  <div class="sidebar-column col-xl-4 col-lg-5 col-md-12 col-sm-12">
                      <div class="inner-column">

                          <!-- Booking Widget -->
                          <div class="sidebar-widget booking-widget">
                              <h5>Book this Treks</h5>

                              <!-- Booking Form -->
                              <div class="booking-form">

                                  <!-- Contact Form -->
                                  <form method="post" action="sendemail.php" id="contact-form">

                                      <div class="form-group">
                                          <input type="text" name="username" placeholder="Full Name" required>
                                          <span class="icon fal fa-user fa-fw"></span>
                                      </div>

                                      <div class="form-group">
                                          <input type="email" name="email" placeholder="Email" required>
                                          <span class="icon fal fa-envelope fa-fw"></span>
                                      </div>

                                      <div class="form-group">
                                          <input type="text" name="phone" placeholder="Phone *" required>
                                          <span class="icon fal fa-phone fa-fw"></span>
                                      </div>
                                      <div class="form-group">
                                          <button class="theme-btn send-btn"><span class="txt">Send Now <i
                                                      class="fa fa-angle-right"></i></span></button>
                                      </div>

                                  </form>

                              </div>
                              <!-- End Booking Form -->

                          </div>

                          <!-- Follow Widget -->
                          <div class="sidebar-widget follow-widget">
                              <div class="sidebar-title">
                                  <h5>Follow us</h5>
                              </div>
                              <ul class="social-list">
                                  <li class="facebook"><span class="icon fab fa-facebook-f fa-fw"></span>
                                      <strong>Facebook</strong>
                                  </li>
                                  <li class="twitter"><span class="icon fab fa-instagram fa-fw"></span>
                                      <strong>Instagram
                                      </strong>
                                  </li>
                              </ul>
                          </div>



                      </div>
                  </div>
              </div>

          </div>
      </section>
     
  </script>
            `
        })
        .catch(error => console.error('Error fetching country Details:', error))
    }
  }

  // Handle initial page load
  updateContent()

  // Listen for hash changes and update content
  window.addEventListener('hashchange', function () {
    updateContent()
  })
})
