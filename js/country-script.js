document.addEventListener('DOMContentLoaded', function () {
  // Function to update content based on hash fragment
  function updateContent () {
    const hash = window.location.hash.substring(1)
    const contentContainer = document.getElementById('contentContainer')
    let allCountries = []
    if (hash === '') {
      fetch('../js/countries/country_list.json')
        .then(response => response.json())
        .then(countryList => {
          allCountries = countryList // Store the original country list

          // Create the search box and append it to the container
          const searchContainer = document.createElement('div')
          searchContainer.innerHTML = `
              <input type="text" id="countrySearch" placeholder="Search country...">
              <button onclick="searchCountries()">Search</button>
            `
          contentContainer.appendChild(searchContainer)

          // Initial rendering of all countries
          renderCountries(countryList)
        })
        .catch(error => console.error('Error fetching country list:', error))
      // Function to check if an image file exists
      async function imageExists (url) {
        try {
          const response = await fetch(url, { method: 'HEAD' })
          return response.ok
        } catch (error) {
          console.error('Error checking image existence:', error)
          return false
        }
      }

      // Function to render countries based on the provided list
      async function renderCountries (countries) {
        // Create a string with the HTML content
        const countryListContent = await Promise.all(
          countries.map(async (country, index) => {
            // Check for the existence of different file extensions (png, jpg, jpeg)
            let imageSrc = '../images/placeholder-image.jpg' // Placeholder image if none found
            const extensions = ['png', 'jpg', 'jpeg']

            for (const ext of extensions) {
              const imagePath = `../images/countries/${country}.${ext}`
              if (await imageExists(imagePath)) {
                imageSrc = imagePath
                break // Stop checking if the image is found
              }
            }

            // Use a ternary operator to handle spaces in the country name for href, alt, and title
            const countryNameForHref = country.replace(/ /g, '_')
            const countryNameForDisplay = country.replace(/_/g, ' ')

            // Wrap every three items in a new row
            if (index % 3 === 0) {
              return (
                `</div><div class="row clearfix" style="justify-content: center;">` +
                renderCountryBlock(
                  countryNameForHref,
                  countryNameForDisplay,
                  imageSrc
                )
              )
            } else {
              return renderCountryBlock(
                countryNameForHref,
                countryNameForDisplay,
                imageSrc
              )
            }
          })
        )

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
                ${countryListContent.join('')}
            </div>
        </div>
      </section>
    `
      }

      // Helper function to render a country block
      function renderCountryBlock (
        countryNameForHref,
        countryNameForDisplay,
        imageSrc
      ) {
        return `
      <!--Block-->
      <div class="team-block-one col-lg-4 col-md-6 col-sm-12">
          <div class="inner-box">
              <div class="lower-box">
                  <h4><a href="#${countryNameForHref}">${countryNameForDisplay}</a></h4>
                  <div class="phone">
                      <a href="#${countryNameForHref}" class="theme-btn call-btn">
                          <i class="icon"><img src="${imageSrc}" alt="${countryNameForDisplay}" title="${countryNameForDisplay}"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    `
      }
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
                      ${
                        data.Additional_Description
                          ? data.Additional_Description
                          : ''
                      }                      <div class="feature-box">
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

// Function to filter countries based on the search input
function searchCountries () {
  const searchTerm = document
    .getElementById('countrySearch')
    .value.toLowerCase()
  const filteredCountries = allCountries.filter(country =>
    country.toLowerCase().includes(searchTerm)
  )
  renderCountries(filteredCountries)
}
