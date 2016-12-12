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
    public String saveFile(@RequestParam(value = "file",required = false) MultipartFile file,
                           @RequestParam(value = "qImg",required = false) MultipartFile qImg,
                           @RequestParam(value = "aImg",required = false) MultipartFile aImg,
                           HttpServletRequest request) throws IOException {
        String localhost = "http://localhost:8110/AutoGenPaperSystem/api/upload/file/";
        File filePath = new File(request.getServletContext().getRealPath("/upload/file"));
        //System.out.println("filePath----"+filePath);
        if (!filePath.exists()){
            filePath.mkdir();
        }
        FileCopyUtils.copy(file.getBytes(),new File(filePath+"/"+file.getOriginalFilename()));
        String fileUrl = localhost+file.getOriginalFilename();
        System.out.println("url-->"+fileUrl);
        return null;
    }
}
