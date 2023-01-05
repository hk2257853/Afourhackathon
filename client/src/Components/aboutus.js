function contact() {
  return (
  <div>      

    <div class="bg-white py-5">
      <div class="container py-5">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
            <h2 class="font-weight-light">Skills Database Project (Micro Apps)</h2>
            <p class="font-italic text-muted mb-4">We offer: An application where mentor can add skills (PS1). The users can select the skill from database and store information about their skill level (PS2). Also user can filter skills (PS3) </p>
          </div>
          <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
          <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
            <h2 class="font-weight-light">Tech Used</h2>
            <p class="font-italic text-muted mb-4">MERN, bootstrap, Postman, Docker, git</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light py-5">
      <div class="container py-5">
        <div class="row mb-4">
          <div class="col-lg-5">
            <h2 class="display-4 font-weight-light">Our team</h2>
            <p class="font-italic text-muted">We are a team of budding software engineers</p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 class="mb-0">Puneet Patil</h5><span class="small text-uppercase text-muted">Frontend engineer (React) </span>
              <a href="https://harshk-portfolio.netlify.app/"  target="_blank" className="btn btn-primary"><i class="bi bi-link"></i></a>
            </div>
          </div>
                
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 class="mb-0">Prateek Sharma</h5><span class="small text-uppercase text-muted">Frontend + Docker </span>
              <a href="https://harshk-portfolio.netlify.app/"  target="_blank" className="btn btn-primary"><i class="bi bi-link"></i></a>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 class="mb-0">Harsh Kumar</h5><span class="small text-uppercase text-muted">Fullstack Engineer </span>
              <a href="https://harshk-portfolio.netlify.app/"  target="_blank" className="btn btn-primary"><i class="bi bi-link"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <footer class="bg-light pb-5">
      <div class="container text-center">
        <p class="font-italic text-muted mb-0">Thx for providing with us this opportunity!</p>
      </div>
    </footer>

  </div>
  );
}

export default contact;
