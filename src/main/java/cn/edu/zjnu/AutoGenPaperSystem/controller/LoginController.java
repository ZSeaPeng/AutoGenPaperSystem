package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.ComManager;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.ComManagerService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by zseapeng on 2016/11/16.
 */
@Controller
@RequestMapping(value = "/api")
@SessionAttributes({"userid", "adminpassword"})
public class LoginController {

    @Resource
    private UserService userServiceImpl;
    @Resource
    private ComManagerService comManagerServiceImpl;


    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public
    @ResponseBody
    Object Login(String username, String password, ModelMap model, HttpSession session, Integer type) {
        String tempPassword = String.valueOf(new Md5Hash(password, password));
        // Map map = new HashMap();
        //map.clear();
        if (type == 2) {
            ComManager comManager = comManagerServiceImpl.selectUserByName(username);
            if (comManager == null) {
                return "{\"error\":" + "\"username\"}";
            }
            if (!comManager.getCommanagerPsw().equals(tempPassword)) {
                return "{\"error\":" + "\"password\"}";
            }
            model.put("userid", Integer.valueOf(comManager.getCommanagerId()));
            model.addAttribute("user", comManager);
            model.addAttribute("userid", Integer.valueOf(comManager.getCommanagerId()));
            comManager.setType(2);
            return comManager;
        }


        if (type == 1) {
            User userTemp = userServiceImpl.selectUserByUserName(username);
            if (userTemp == null) {
                return "{\"error\":" + "\"username\"}";
            }

            if (!userTemp.getUserpassword().equals(tempPassword)) {
                return "{\"error\":" + "\"password\"}";
            }
            model.put("userid", Integer.valueOf(userTemp.getUserId()));
            model.addAttribute("user", userTemp);
            model.addAttribute("userid", Integer.valueOf(userTemp.getUserId()));
            userTemp.setType(1);

            return userTemp;
        }
        return null;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public
    @ResponseBody
    String Logout(SessionStatus sessionStatus) {
        //System.out.println("-----------");
        sessionStatus.setComplete();
        return "{\"info\":\"logout\"}";
    }

}
