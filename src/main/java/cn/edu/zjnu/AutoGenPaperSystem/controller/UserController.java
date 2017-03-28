package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.model.UserJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/22.
 */
@Controller
@RequestMapping("/api/user")
@SessionAttributes("userid")
@ResponseBody
public class UserController {
    @Resource
    private UserService userServiceImpl;


    @RequestMapping(value = "/show", method = RequestMethod.GET)
    public UserJson showInfo(@ModelAttribute("userid") Integer userid) {
        UserJson userJson = userServiceImpl.selectShow(userid);
        return userJson;
    }

    @RequestMapping(value = "/change", method = RequestMethod.POST)
    public String changePassword(@RequestBody Map password, @ModelAttribute("userid") Integer userid, SessionStatus sessionStatus) {
        User user = userServiceImpl.selectByPrimaryKey(userid);
        user.setUserpassword(String.valueOf(password.get("password")));
        user.setAdd(new ArrayList());
        if (userServiceImpl.updateByPrimaryKeySelective(user) != 0) {
            sessionStatus.setComplete();
            return "{\"success\":\"true\"}";
        }
        return "{\"success\":\"false\"}";
    }

    @RequestMapping(value = "/changeinfo", method = RequestMethod.POST)
    public User changeInfo(@RequestBody User user, @ModelAttribute("userid") Integer userid) {
        user.setAdd(new ArrayList());
        user.setUserpassword(null);
        user.setUserId(userid);
        userServiceImpl.updateByPrimaryKeySelective(user);
        return userServiceImpl.selectByPrimaryKey(userid);
    }

}
