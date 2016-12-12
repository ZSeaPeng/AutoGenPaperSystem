package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.GradeMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Grade;
import cn.edu.zjnu.AutoGenPaperSystem.service.GradeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class GradeServiceImpl implements GradeService {

    @Resource
    private GradeMapper gradeMapper;

    public int deleteByPrimaryKey(Integer cradeId) {
        return 0;
    }

    public int insert(Grade record) {
        return 0;
    }

    public int insertSelective(Grade record) {
        return 0;
    }

    public Grade selectByPrimaryKey(Integer cradeId) {

        return gradeMapper.selectByPrimaryKey(cradeId);
    }

    public int updateByPrimaryKeySelective(Grade record) {
        return 0;
    }

    public int updateByPrimaryKey(Grade record) {
        return 0;
    }

    public List<Grade> selectAllGrade() {
        return gradeMapper.selectAllGrade();
    }
}
