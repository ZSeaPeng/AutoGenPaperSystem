package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.ComManagerJson;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.ComManagerService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zseapeng on 2016/11/28.
 */
@Controller
@RequestMapping(value = "/api/commanager")
@SessionAttributes("userid")
@ResponseBody
public class GroupOperateController {

    @Resource
    private ComManagerService comManagerServiceImpl;

    @RequestMapping(value = "/show", method = RequestMethod.GET)
    public ComManagerJson showUsers(@ModelAttribute("userid") Integer userid) {
        ComManagerJson comManagerJsonList = comManagerServiceImpl.selectUserListById(userid);
        return comManagerJsonList;
    }

    @RequestMapping(value = "/adduser", method = RequestMethod.POST)
    public String addUser(@ModelAttribute("userid") Integer userid,@RequestBody User user) {
        comManagerServiceImpl.updateUserList(user, userid);
        return null;
    }


}
