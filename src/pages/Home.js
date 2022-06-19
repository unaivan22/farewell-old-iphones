import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
        <body className="position-relative">
		<div className="d-flex flex-column flex-root">
			<div className="py-5">
				<div className="container">
					<nav className="navbar">
						<h1 className="navbar-brand">iOS 15</h1>
					</nav>
				</div>
			</div>
			<div className='imagesSection'>
				<div className="container">
					<img className="img-fluid" src="/assets/media/phones/phones.png" />
				</div>
			</div>
			<div className="mb-n10 mb-lg-n20 z-index-2 bg-white pt-12" >
				<div className="container">
					<div className="text-center mb-17 pt-10">
						<h3 className=" text-dark mb-10 title">Farewell iPhone SE (1st gen), <br/> 6s, 6s Plus, 7, 7 Plus</h3>
						<div className="fs-1 text-muted fw-normal mb-12">Started now we stopped the iOS update for the device
						<br />to get the latest iOS you can upgrade iphone</div>
						<a className="btn-lg text-white fs-3 upgrade">Upgrade</a>
					</div>
				</div>
			</div>
		</div>
	</body>
    </React.Fragment>
  )
}
