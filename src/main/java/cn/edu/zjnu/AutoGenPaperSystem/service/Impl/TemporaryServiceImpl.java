package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.TemporaryMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Temporary;
import cn.edu.zjnu.AutoGenPaperSystem.service.TemporaryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zseapeng on 2016/11/30.
 */
@Service
public class TemporaryServiceImpl implements TemporaryService {
    @Resource
    private TemporaryMapper temporaryMapper;

    @Override
    public int deleteByPrimaryKey(Integer temporaryId) {
        return 0;
    }

    @Override
    public int insert(Temporary record) {
        return temporaryMapper.insert(record);
    }

    @Override
    public int insertSelective(Temporary record) {
        return temporaryMapper.insertSelective(record);
    }

    @Override
    public Temporary selectByPrimaryKey(Integer temporaryId) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(Temporary record) {
        return temporaryMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Temporary record) {
        return 0;
    }

    @Override
    public List selectAll() {
        return temporaryMapper.selectAll();
    }

    @Override
    public int updateDeleteById(Integer tempUserId) {
        return temporaryMapper.updateDeleteById(tempUserId);
    }
}
