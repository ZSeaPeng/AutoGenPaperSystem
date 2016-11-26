package cn.edu.zjnu.AutoGenPaperSystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

/**
 * Created by zseapeng on 2016/11/25.
 */
@Controller
@RequestMapping("/api/upload")
public class UploadController {

    @RequestMapping(value = "/file",method = RequestMethod.POST)
    public String saveFile(@RequestParam(value = "file",required = false) MultipartFile file, HttpServletRequest request) throws IOException {
        String localhost = "http://localhost:8110/AutoGenPaperSystem/api/upload/file/";
        File path = new File(request.getServletContext().getRealPath("/upload/file"));
        //System.out.println("path----"+path);
        if (!path.exists()){
            path.mkdir();
        }
        FileCopyUtils.copy(file.getBytes(),new File(path+"/"+file.getOriginalFilename()));
        String fileUrl = localhost+file.getOriginalFilename();
        return null;
    }
}
