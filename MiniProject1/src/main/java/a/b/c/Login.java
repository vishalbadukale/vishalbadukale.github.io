package a.b.c;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/Login")
public class Login extends HttpServlet {

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String email = request.getParameter("user");
		String password = request.getParameter("pwd");
		PrintWriter po = response.getWriter();

		try {

			Connection con = null;
			Statement sm = null;
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pune", "root", "");
			sm = con.createStatement();
			ResultSet rs = sm
					.executeQuery("select * from info where email='" + email + "' and password='" + password + "'");

			if (rs.next()) {

				String userid = rs.getString(1);
				HttpSession session = request.getSession();
				session.setAttribute("userid", userid);
				response.sendRedirect("profile.jsp");

				String insname = rs.getString("insname");
				String cperson = rs.getString("cperson");

				session.setAttribute("insname", insname);
				session.setAttribute("cperson", cperson);

				session.setAttribute("email", email);
				String course = rs.getString("course");

				session.setAttribute("course", course);
				String ctype = rs.getString("ctype");

				session.setAttribute("ctype", ctype);
				String mobile = rs.getString("mobile");
				session.setAttribute("mobile", mobile);
				String area = rs.getString("area");
				session.setAttribute("area", area);
				String address = rs.getString("address");
				session.setAttribute("address", address);
			} else {
				po.println("Wrong username or password...");
			}
		} catch (Exception e1) {
			po.println(e1);

		}
	}

}
