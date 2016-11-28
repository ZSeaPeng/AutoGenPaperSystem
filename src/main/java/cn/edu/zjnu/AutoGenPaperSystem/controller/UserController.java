package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;

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
    public User showInfo(@ModelAttribute("userid") Integer userid) {
        User user = userServiceImpl.selectByPrimaryKey(userid);
        String CollUrl = "/api/userid" + userid + "/collection";
        user.setUsercollection(CollUrl);
        return user;
    }

    @RequestMapping(value = "/change", method = RequestMethod.POST)
    public User changePassword(String password, @ModelAttribute("userid") Integer userid) {
        User user = userServiceImpl.selectByPrimaryKey(userid);
        user.setUserpassword(password);
        user.setAdd(new ArrayList());
        userServiceImpl.updateByPrimaryKeySelective(user);
        return userServiceImpl.selectByPrimaryKey(userid);
    }


}
