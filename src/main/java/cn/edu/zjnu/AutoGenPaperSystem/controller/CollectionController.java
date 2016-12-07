package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * Created by zseapeng on 2016/12/7.
 */
@Controller
@RequestMapping("/api/userid{id}/collection")
@SessionAttributes("userid")
@ResponseBody
public class CollectionController {
    @Resource
    private UserService userServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public void getCollection(@ModelAttribute("userid") int userid){

    }

}
