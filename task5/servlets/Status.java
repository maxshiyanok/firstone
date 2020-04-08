import java.io.IOException;
import java.io.PrintWriter;

public class Status extends javax.servlet.http.HttpServlet {
    @Override
    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        PrintWriter pw = response.getWriter();
        pw.println("Application Is Running");
    }
}
