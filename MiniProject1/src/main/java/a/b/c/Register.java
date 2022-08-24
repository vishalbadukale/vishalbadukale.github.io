package a.b.c;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Register
 */
@WebServlet(description = "Sending Data to server", urlPatterns = { "/Register" })
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter pw = response.getWriter();
		String insname = request.getParameter("insname");
		String cperson = request.getParameter("cperson");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String course = request.getParameter("course");
		String ctype = request.getParameter("ctype");
		String mobile = request.getParameter("mobile");
		String area = request.getParameter("area");
		String address = request.getParameter("address");

		try {
			Connection con = null;
			Statement sm = null;
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/pune", "root", "");
			sm = con.createStatement();
			String sql = ("INSERT INTO info(insname,cperson,email,password,course,ctype,mobile,area,address) VALUES ('"
					+ insname + "','" + cperson + "','" + email + "','" + password + "','" + course + "','" + ctype
					+ "','" + mobile + "','" + area + "','" + address + "')");
			int check = 0;
			check = sm.executeUpdate(sql);
			if (check > 0) {
				response.sendRedirect("ThankYou.html");
			} else {
				System.out.println("Insertion not done");
			}

		} catch (Exception e) {
			System.out.println(e);
		}

	}

}
