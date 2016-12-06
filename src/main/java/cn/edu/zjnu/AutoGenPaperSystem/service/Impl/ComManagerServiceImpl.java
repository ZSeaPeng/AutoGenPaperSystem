package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.ComManagerMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.ComManager;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.ComManagerService;
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
        return null;
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
    public List selectUserListById(Integer id) {
        String userList = comManagerMapper.selectUserListById(id);
        List usersList = new ArrayList();
        usersList.clear();
        String[] users = userList.split(",");
        for (String s : users) {
            if (!s.equals("0")) {
                System.out.println("s---" + s);
                User user = userMapper.selectByPrimaryKey(Integer.valueOf(s));
                System.out.println("user---" + user);
                usersList.add(user);
            }
        }
        return usersList;
    }

    @Override
    public int updateUserList(User user, Integer comId) {
        user.setUserpassword(String.valueOf(new Md5Hash(user.getUserpassword(),user.getUserpassword())));
        user.setCommanagerId(comId);
        userMapper.insertSelective(user);
        String users = comManagerMapper.selectUserListById(comId);
        users = users + ","+String.valueOf(user.getUserId());

        System.out.println("user.getUserId()---"+user.getUserId());
        ComManager comManager = new ComManager();
        comManager.setCommanagerId(comId);
        comManager.setUseridlist(users);
        //System.out.println("comId---"+user.getCommanagerId());
        return comManagerMapper.updateByPrimaryKeySelective(comManager);
    }

    @Override
    public ComManager selectUserByName(String name) {
        return comManagerMapper.selectUserByName(name);
    }

}
