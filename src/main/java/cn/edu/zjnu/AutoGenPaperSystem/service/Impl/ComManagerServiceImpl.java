package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.*;
import cn.edu.zjnu.AutoGenPaperSystem.model.*;
import cn.edu.zjnu.AutoGenPaperSystem.service.ComManagerService;
import cn.edu.zjnu.AutoGenPaperSystem.util.DataUtil;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zseapeng on 2016/12/1.
 */
@Service
public class ComManagerServiceImpl implements ComManagerService {

    @Resource
    private ComManagerMapper comManagerMapper;
    @Resource
    private UserMapper userMapper;
    @Resource
    private UserSubPermissMapper userSubPermissMapper;
    @Resource
    private ComMangSubPermissMapper comMangSubPermissMapper;
    @Resource
    private PaperMapper paperMapper;
    @Resource
    private SubjectMapper subjectMapper;


    @Override
    public int deleteByPrimaryKey(Integer commanagerId) {
        return 0;
    }

    @Override
    public int insert(ComManager record) {
        return 0;
    }

    @Override
    public int insertSelective(ComManager record) {
        return comManagerMapper.insertSelective(record);
    }

    @Override
    public ComManager selectByPrimaryKey(Integer commanagerId) {
        return comManagerMapper.selectByPrimaryKey(commanagerId);
    }

    @Override
    public int updateByPrimaryKeySelective(ComManager record) {


        return comManagerMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(ComManager record) {
        return 0;
    }

    @Override
    public List selectAll() {
        return comManagerMapper.selectAll();
    }

    @Override
    public int updateDeleteById(Integer id) {
        return comManagerMapper.updateDeleteById(id);
    }

    @Override
    public ComManagerJson selectUserListById(Integer id) {
        ComManager comManager = comManagerMapper.selectUserListById(id);
        //将查询到的数据导入相应json
        ComManagerJson comManagerJson= new ComManagerJson();
        comManagerJson= (ComManagerJson) DataUtil.getNewClass(comManagerJson,comManager);
        //json中添加允许查询的试卷数，已经组成到的试卷数
        List<ComMangSubPermiss> comMangSubPermissList=comMangSubPermissMapper.selectByComManagerId(comManager.getCommanagerId());
        List<Integer> comallows=new ArrayList();
        List<Integer> comdos=new ArrayList<>();
        for (ComMangSubPermiss list:comMangSubPermissList){
            comallows.add(list.getAllowpaper());
            comdos.add(list.getDopaper());
        }
        comManagerJson.setAllowpaper(comallows);
        comManagerJson.setDopaper(comdos);
        //可查询的学科
        String[] subjectIdList=comManager.getSubjectcan().split(",");
        List<String> subjectcan=new ArrayList<>();
        for (String list:subjectIdList){
            if (!list.equals("0")){
                subjectcan.add(subjectMapper.selectByPrimaryKey(Integer.valueOf(list)).getSubjectName());
            }
        }
        comManagerJson.setSubjectcanList(subjectcan);
        //json加入用户列表
        List<UserJson> userJsonList=new ArrayList<>();
        String []userList=comManager.getUseridlist().split(",");
        for (String list:userList){
            User user=userMapper.selectByPrimaryKey(Integer.valueOf(list));
            UserJson userJson=new UserJson();
            userJson= (UserJson) DataUtil.getNewClass(userJson,user);
            List<UserSubPermiss> userSubPermiss=userSubPermissMapper.selectListByUseridKey(user.getUserId());
            List allows=new ArrayList();
            List<Integer> dos=new ArrayList<>();
            for (UserSubPermiss usplist:userSubPermiss){
                allows.add(usplist.getAllowpaper());
                dos.add(usplist.getDopaper());
            }
            userJson.setAllowpaper(allows);
            userJson.setDopaper(dos);
            userJsonList.add(userJson);
        }
        comManagerJson.setUserJsonList(userJsonList);
        //json加入历史组成的试卷
        List<Paper> historyPaperList=paperMapper.selectByComManagerId(comManager.getCommanagerId());
        List<PaperJson> paperJsonList = new ArrayList<>();
        paperJsonList.clear();
        for (Paper paper:historyPaperList){
            PaperJson paperJson = new PaperJson();
            paperJson= (PaperJson) DataUtil.getNewClass(paperJson,paper);
            paperJsonList.add(paperJson);
        }
        comManagerJson.setHistoryPaper(paperJsonList);
        comManagerJson.setType(2);
//        String[] users = userList.split(",");
//        for (String s : users) {
//            if (!s.equals("0")) {
//                System.out.println("s---" + s);
//                User user = userMapper.selectByPrimaryKey(Integer.valueOf(s));
//                System.out.println("user---" + user);
//                usersList.add(user);
//            }
//        }
        return comManagerJson;
    }

    @Override
    public int updateUserList(User user, Integer comId) {
//        user.setUserpassword(String.valueOf(new Md5Hash(user.getUserpassword(), user.getUserpassword())));
//        user.setCommanagerId(comId);
//        userMapper.insertSelective(user);
//        String users = comManagerMapper.selectUserListById(comId);
//        users = users + "," + String.valueOf(user.getUserId());
//
//        System.out.println("user.getUserId()---" + user.getUserId());
        ComManager comManager = new ComManager();
//        comManager.setCommanagerId(comId);
//        comManager.setUseridlist(users);
        //System.out.println("comId---"+user.getCommanagerId());
        return comManagerMapper.updateByPrimaryKeySelective(comManager);
    }

    @Override
    public ComManager selectUserByName(String name) {
        return comManagerMapper.selectUserByName(name);
    }

}
