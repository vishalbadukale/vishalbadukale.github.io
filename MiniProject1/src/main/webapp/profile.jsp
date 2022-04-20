<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
		pageEncoding="ISO-8859-1"%>
<%@ page language="java" import="java.sql.*"%>
<%@ page language="java" import="javax.servlet.http.*"%>

<!DOCTYPE html>
<html>
<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Main Page</title>
        
		<link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
    />
    <script
        src="https://kit.fontawesome.com/162dba6519.js"
        crossorigin="anonymous"
    ></script>
    <script
        src="https://kit.fontawesome.com/13f391ae93.js"
        crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
		<link rel="stylesheet" href="style.css" />
		<style>
			.reg{
				width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

			}
			.reg-heading{
				left: 25%;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<nav>
			<div id="header">
				<div class="nav-h">
					<div class="nav-heading">
						<h2>Pune Training</h2>
					</div>
				</div>
				<div class="nav-bar">
					<ul class="nav-item">
						<li class="active"><a href="register.html">Home</a></li>
						<li><a href="#">It Training</a></li>
						<li><a href="#">It Training</a></li>
						<li><a href="Logout">Logout</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<section>
			<div class="welcome">
				<div class="container">
					<div class="wcMsg">
							<div class="welcomeMessage">
							<h1>Welcome to Pune Training</h1>
							<p>
								<span>punetraining.com</span> is a leading portal for corporate
								business that will help you monetize your work to the most level
								you could reach.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adip,
								<span>Yourbusiness.com</span> will give you a new way to look at
								your business and lead it to all new horizons.
							</p>
						</div>
						<div class="wcMsg-img">
							<img src="./img/images.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="register">
                <div class="showimg">
				<div class="container">
					<div class="reg-col">
						<div class="reg">
							<div class="reg-heading">
								<h3>Profile</h3>
							</div>

                            <div class="reg-table">



                                
                                    <table style="border-spacing: 8px;">
                                        <form name="myform" action="Register" method="post">
                                            
										<tr>
											<td>Name Of Institute :</td>
											<td><%=session.getAttribute("insname")%></td>

									</tr>
									<tr>
											<td>Contact Person :</td>
											<td><%=session.getAttribute("cperson")%></td>

									</tr>
									<tr>
											<td>Email :</td>
											<td><%=session.getAttribute("email")%></td>

									</tr>
									<tr>
											<td>Courses :</td>
											<td><%=session.getAttribute("course")%></td>

									</tr>
									<tr>
											<td>Course Type :</td>
											<td><%=session.getAttribute("ctype")%></td>

									</tr>
									<tr>
											<td>Mobile :</td>
											<td><%=session.getAttribute("mobile")%></td>

									</tr>

									<tr>
											<td>Area :</td>
											<td><%=session.getAttribute("area")%></td>

									</tr>
									<tr>
											<td>Address :</td>
											<td><%=session.getAttribute("address")%></td>

									</tr>
                                    </table>
            
                                
                            </div>
        
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
            <footer>
                <div class="footer">
                    <div class="footerData">
                        <div class="socialIcons">
                            <div class="sIcon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                            <div class="sIcon">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div class="sIcon">
                                <i class="fa fa-google" aria-hidden="true"></i>
                            </div>
    
                            <div class="sIcon">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="copyright">
                            Copyright © 2022-2030 All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
	</body>
</html>
