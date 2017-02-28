package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.DifficultyMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Difficulty;
import cn.edu.zjnu.AutoGenPaperSystem.model.DifficultyJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.DifficultyService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class DifficultyServiceImpl implements DifficultyService {
    @Resource
    private DifficultyMapper difficultyMapper;

    public int deleteByPrimaryKey(Integer difficultyId) {
        return 0;
    }

    public int insert(Difficulty record) {
        return 0;
    }

    public int insertSelective(Difficulty record) {
        return 0;
    }

    public Difficulty selectByPrimaryKey(Integer difficultyId) {
        return null;
    }

    public int updateByPrimaryKeySelective(Difficulty record) {
        return 0;
    }

    public int updateByPrimaryKey(Difficulty record) {
        return 0;
    }


    public List selectAllDifficult(Integer subjectId, int gradeId, String subName, String others, String pointId, String t, String d, String c) {
        List<DifficultyJson> difficultyJsons = new ArrayList<DifficultyJson>();
        List<Difficulty> difficulties = difficultyMapper.selectAllDifficult();
        DifficultyJson difficultJson = new DifficultyJson();
        difficultJson.setId(0);
        difficultJson.setName("全部");
        difficultJson.setUrl("/tiku/" + gradeId + "/" + subName + "/point" + pointId + "/t" + t + "d" +
                0 + "c" + c);
        if (d.equals("0")){
            difficultJson.setSelect(true);
        }
        difficultyJsons.add(difficultJson);
        for (Difficulty list : difficulties) {
            DifficultyJson difficultyJson = new DifficultyJson();
            difficultyJson.setId(list.getDifficultyId());
            difficultyJson.setName("" + list.getUplimit() + "-" + list.getLowlimit() + "(" + list.getDescribes() + ")");
            difficultyJson.setUrl("/tiku/" + gradeId + "/" + subName + "/point" + pointId + "/t" + t + "d" +
                    list.getDifficultyId() + "c" + c);
            if (list.getDifficultyId().toString().equals(d)){
                difficultyJson.setSelect(true);
            }
            difficultyJsons.add(difficultyJson);
        }
        return difficultyJsons;
    }
}
