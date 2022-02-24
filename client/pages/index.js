import React, { useState } from 'react'

let endpoint = "http://localhost:8080";

export default function Home() {
  const [formData, updateFormData] = useState();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault()
    console.log(formData);
    if (!formData) return
    try {
      let response = await fetch(endpoint + '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData)
      });
      let res2 = await response.json();
      console.log("resposn=", res2)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <body className="has-animations">
      <header className="pt2 pb1 align--center">
        <div className="container">
          <p>Welcome to</p>
          <h1 title="Camp Chippewa">My beutiful blogs</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <section className="grid-row grid-row--center">
            <div className="grid-column span-half pt3 pb3 mobile-m order-1">
              <div className="relative">
                <img className="info-image relative z2" src="/img/cabin.jpg" alt="Cabin" />
                <div className="pattern pattern--left-down absolute z1"></div>
              </div>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-2">
              <h3>Cabin</h3>
              <p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quamquam te quidem video minime
                esse deterritum. Beatus sibi videtur esse moriens. In qua quid est boni praeter
                summam&nbsp;voluptatem.</p>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-4">
              <h3>Teepees</h3>
              <p>A quibus propter discendi cupiditatem videmus ultimas terras esse peragratas. Laelius clamores
                sofòw ille so lebat Edere compellans gumias ex ordine&nbsp;nostros.</p>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-3">
              <div className="relative">
                <img className="info-image relative z2" src="/img/teepee.jpg" alt="Teepee" />
                <div className="pattern pattern--right-middle absolute z1"></div>
              </div>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-5">
              <div className="relative">
                <img className="info-image relative z2" src="/img/fishing.jpg" alt="Fishing" />
                <div className="pattern pattern--left-up absolute z1"></div>
              </div>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-6">
              <h3>Fishing</h3>
              <p>Que Manilium, ab iisque M. Intellegi quidem, ut propter aliam quampiam rem, verbi gratia propter
                voluptatem, nos amemus; An eum locum libenter invisit&nbsp;ultimas.</p>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-8">
              <h3>Archery</h3>
              <p>At ille pellit, qui permulcet sensum voluptate. Quid in isto egregio tuo officio et tanta
                fide-sic enim existimo-ad corpus refers? Nec vero sum nescius esse utilitatem in&nbsp;historia.
              </p>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-7">
              <div className="relative">
                <img className="info-image relative z2" src="/img/archery.jpg" alt="Archery" />
                <div className="pattern pattern--right-down absolute z1"></div>
              </div>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-9">
              <div className="relative">
                <img className="info-image relative z2" src="/img/canoeing.jpg" alt="Canoeing" />
                <div className="pattern pattern--left-middle absolute z1"></div>
              </div>
            </div>
            <div className="grid-column span-half pt3 pb3 mobile-m order-10">
              <h3>Canoeing</h3>
              <p>Nam si propter voluptatem, quae est ista laus, quae possit e macello peti? Sin te auctoritas
                commovebat, nobisne omnibus et Platoni ipsi nescio quem illum&nbsp;anteponebas.</p>
            </div>
          </section>
        </div>
        <section className="bg--secondary-color pt3 pb3">
          <div className="container">
            <div className="mb2 align--center">
              <h3 className="mb1">Contact me to get started</h3>
              <p>I'll reply when I get back from&nbsp;fishing.</p>
            </div>
            <form onSubmit={submit}>
              <div className="grid-row">
                <div className="grid-column span-half mt1">
                  <label className="label" for="name" >Name</label>
                  <input className="form-control" id="name" name="name" onChange={handleChange} />
                </div>
                <div className="grid-column span-half mt1">
                  <label className="label" for="email" >Email</label>
                  <input className="form-control" id="email" name="email" type="email" onChange={handleChange} />
                </div>
              </div>
              <label className="label mt1" for="message">Message</label>
              <textarea className="form-control" id="message" name="msg" onChange={handleChange}></textarea>
              <div className="align--right mt1">
                <button className="btn btn--outline">Send</button>
              </div>
            </form>
          </div>
        </section>

      </main>
    </body>

  )
}

