package cn.edu.zjnu.AutoGenPaperSystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by zseapeng on 2016/11/18.
 */
@Controller
@RequestMapping(value = "/api/paper")
@ResponseBody
public class PaperController {

    @RequestMapping(value = "/getinfo", method = RequestMethod.GET)
    public List getInfo(){
        return null;
    }

}

