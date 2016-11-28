package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by zseapeng on 2016/11/16.
 */
@Controller
@RequestMapping(value = "/api")
@SessionAttributes({"userid","adminpassword"})
public class LoginController {

    @Resource
    private UserService userServiceImpl;


    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public @ResponseBody Object Login(String username, String password, ModelMap model, HttpSession session){
        String tempPassword= String.valueOf(new Md5Hash(password,password));
        User userTemp = userServiceImpl.selectUserByUserName(username);

        if (userTemp == null){
            return "{\"error\":"+"\"username\"}";
        }

        if (!userTemp.getUserpassword().equals(tempPassword)){
            return "{\"error\":"+"\"password\"}";
        }
        model.put("userid",Integer.valueOf(userTemp.getUserId()));
        model.addAttribute("user",userTemp);
        model.addAttribute("userid",Integer.valueOf(userTemp.getUserId()));


        return userTemp;
    }
    @RequestMapping(value = "/logout",method = RequestMethod.GET)
    public @ResponseBody String Logout(SessionStatus sessionStatus){
        //System.out.println("-----------");
        sessionStatus.setComplete();
        return "{\"info\":\"logout\"}";
    }

}
