package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.UserSubPermissMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.UserSubPermiss;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserSubPermissService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by zseapeng on 2017/3/19.
 */
@Service
public class UserSubPermissServiceImpl implements UserSubPermissService {

    @Resource
    private UserSubPermissMapper userSubPermissMapper;

    @Override
    public int deleteByPrimaryKey(Integer subpermissid) {
        return 0;
    }

    @Override
    public int insert(UserSubPermiss record) {
        return 0;
    }

    @Override
    public int insertSelective(UserSubPermiss record) {
        return 0;
    }

    @Override
    public UserSubPermiss selectByPrimaryKey(Integer subpermissid) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(UserSubPermiss record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(UserSubPermiss record) {
        return 0;
    }

    @Override
    public int updateBySubIdAndUserId(Integer subid, Integer userId) {
        return 0;
    }
}
