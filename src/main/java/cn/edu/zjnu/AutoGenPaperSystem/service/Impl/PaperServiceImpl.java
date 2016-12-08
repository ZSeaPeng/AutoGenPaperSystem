package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.PaperMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * Created by zseapeng on 2016/11/25.
 */
@Service
public class PaperServiceImpl implements PaperService {
    @Resource
    private PaperMapper paperMapper;

    @Override
    public int insertSelective(Paper record) {
        record.setGeneratime(new Date());
        return paperMapper.insertSelective(record);
    }

    @Override
    public Paper selectByPrimaryKey(Integer paperId) {
        return paperMapper.selectByPrimaryKey(paperId);
    }

    @Override
    public List<Paper> selectByUserId(int userid) {

        return paperMapper.selectByUserId(userid);
    }
}
