import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class GetName extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");
        PrintWriter pw = response.getWriter();
        if(name != null && name.length() != 0)
            pw.println("Your name is " + name);
        else
            pw.println("You have no name");
    }
}
