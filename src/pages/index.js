import React from "react"
import { Grid } from "semantic-ui-react"

import SEO from "../components/seo"
import banner from "../images/banner1.png"
import phone from "../images/phone.png"

import "../components/layout.css"
import "semantic-ui-css/semantic.min.css"

const IndexPage = () => (
  <div className="main-ctn">
    <img className="banner" alt="banner" src={banner} />
    <div className="ui container">
      <SEO title="Home" />
      <nav>
        <div className="name">Name</div>
        <ul className="login">
          <li className="login-item btn-t">SIGN UP</li>
          <li className="login-item btn">LOGIN</li>
        </ul>
      </nav>
      <Grid stackable columns={2}>
        <Grid.Column>
          <div id="banner-text-1" className="white">
            #1 SUSPENDISSE POTENTI
          </div>
          <div id="banner-text-2" className="white">
            Proin nec urna euismod, posuere ipsum a, congue quam.
          </div>
          <div id="banner-text-3" className="white">
            Aliquam eget viverra diam. Nulla metus elit, auctor sed ante in,
            aliquam condimentum ex.
          </div>
          <span id="read-more" className="white">
            READ MORE
          </span>
        </Grid.Column>
        <Grid.Column>
          <img src={phone} className="banner-img" alt="phone" />
        </Grid.Column>
      </Grid>
      <div className="section-2">
        <div className="section-2-title">Curabitur Condimentum</div>
        <Grid stackable columns={3}>
          <Grid.Column>
            <div className="stat">
              <div className="stat-text-1">20+</div>
              <div className="stat-text-2">Duis laoreet</div>
              <div className="stat-text-3">
                Cras at maximus lacus, at egestas magna. Integer facilisis elit
                a accumsan dapibus.
              </div>
              <div className="stat-text-3">
                Nulla facilisi. Quisque ornare in ante vel pellentesque. Cras at
                maximus lacus, at egestas magna. Integer facilisis elit a
                accumsan dapibus.
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="stat">
              <div className="stat-text-1">3500+</div>
              <div className="stat-text-2">Duis laoreet</div>
              <div className="stat-text-3">
                Cras at maximus lacus, at egestas magna. Integer facilisis elit
                a accumsan dapibus.
              </div>
              <div className="stat-text-3">
                Nulla facilisi. Quisque ornare in ante vel pellentesque. Cras at
                maximus lacus, at egestas magna. Integer facilisis elit a
                accumsan dapibus.
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="stat">
              <div className="stat-text-1">1200+</div>
              <div className="stat-text-2">Duis laoreet</div>
              <div className="stat-text-3">
                Cras at maximus lacus, at egestas magna. Integer facilisis elit
                a accumsan dapibus.
              </div>
              <div className="stat-text-3">
                Nulla facilisi. Quisque ornare in ante vel pellentesque. Cras at
                maximus lacus, at egestas magna. Integer facilisis elit a
                accumsan dapibus.
              </div>
            </div>
          </Grid.Column>
        </Grid>
        <div className="quote-ctn">
          <div className="quote">
            Vivamus egestas placerat ante, ut egestas eros dignissim et.
          </div>
        </div>
        <div id="plans">Subscription Plans</div>
        <div id="plans-ctn">
          <div className="plans">
            <div className="plans-ctn light-yellow">
              <div className="plans-text-1">Free</div>
              <div className="plans-text-2">
                <span style={{ fontSize: "40px" }}>$</span>
                <span style={{ fontSize: "90px" }} className="price">
                  10
                </span>
              </div>
              <div className="plans-text-3">
                Donec ullamcorper orci id quam condimentum
              </div>
            </div>
            <div className="plans-text-4"> Sed sagittis orci</div>
            <div className="plans-text-4">
              <span className="black">125MB</span> Donec
            </div>
            <div className="plans-text-4">
              <span className="black">5GB</span> Duis laoreet
            </div>
            <div className="plans-text-4">
              <span className="black">1</span> Nam dignissim
            </div>
            <div className="plans-text-4">
              <span className="black">24/7</span> Porta lectus
            </div>
            <div className="plans-btn light-yellow">Choose</div>
          </div>
          <div className="plans">
            <div className="plans-ctn yellow">
              <div className="plans-text-1">Basic</div>
              <div className="plans-text-2">
                <span style={{ fontSize: "40px" }}>$</span>
                <span style={{ fontSize: "90px" }} className="price">
                  25
                </span>
              </div>
              <div className="plans-text-3">
                Quisque ornare in ante vel pellentesque
              </div>
            </div>
            <div className="plans-text-4"> Sed sagittis orci</div>
            <div className="plans-text-4">
              <span className="black">250MB</span> Donec
            </div>
            <div className="plans-text-4">
              <span className="black">10GB</span> Duis laoreet
            </div>
            <div className="plans-text-4">
              <span className="black">3</span> Nam dignissim
            </div>
            <div className="plans-text-4">
              <span className="black">24/7</span> Porta lectus
            </div>
            <div className="plans-btn yellow">Choose</div>
          </div>
          <div className="plans">
            <div className="plans-ctn dark-yellow">
              <div className="plans-text-1">Pro</div>
              <div className="plans-text-2">
                <span style={{ fontSize: "40px" }}>$</span>
                <span style={{ fontSize: "90px" }} className="price">
                  70
                </span>
              </div>
              <div className="plans-text-3">
                Curabitur condimentum lobortis lobortis
              </div>
            </div>
            <div className="plans-text-4"> Sed sagittis orci</div>
            <div className="plans-text-4">
              <span className="black">800MB</span> Donec
            </div>
            <div className="plans-text-4">
              <span className="black">50GB</span> Duis laoreet
            </div>
            <div className="plans-text-4">
              <span className="black">10</span> Nam dignissim
            </div>
            <div className="plans-text-4">
              <span className="black">24/7</span> Porta lectus
            </div>
            <div className="plans-btn dark-yellow">Choose</div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">© 2020 Subscription Company. All Rights Reserved.</div>
  </div>
)

export default IndexPage
