package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.KnowledgeMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Knowledge;
import cn.edu.zjnu.AutoGenPaperSystem.model.KnowledgeJson;
import cn.edu.zjnu.AutoGenPaperSystem.model.KnowledgeList;
import cn.edu.zjnu.AutoGenPaperSystem.service.KnowledgeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class KnowledgeServiceImpl implements KnowledgeService {
    @Resource
    private KnowledgeMapper knowledgeMapper;
    //private int level = 0;

    public int deleteByPrimaryKey(Integer knowledgeId) {
        return 0;
    }

    public int insert(Knowledge record) {
        return 0;
    }

    public int insertSelective(Knowledge record) {
        return knowledgeMapper.insertSelective(record);
    }

    public Knowledge selectByPrimaryKey(Integer knowledgeId) {
        return null;
    }

    public int updateByPrimaryKeySelective(Knowledge record) {
        return 0;
    }

    public int updateByPrimaryKey(Knowledge record) {
        return 0;
    }


    /**
     * @param subjectId 科目ID
     * @param gradeID   年级ID
     * @param subName   科目名称
     * @return
     */
    public List<Knowledge> selectKnowledgeBySubjectId(Integer subjectId, int gradeID, String subName) {
        return knowledgeMapper.selectKnowledgeBySubjectId(subjectId);
    }


    public Map selectKnowledgeBySubjectIds(int id) {
        return null;
    }

    /**
     * @param subjectId 科目ID
     * @param grade_id  年级ID
     * @param others    多选项内容
     * @param subName   科目名称
     * @return
     */

    public List selectFirstKnowledgeBySubjectId(Integer subjectId, int grade_id, String others, String subName, String pointId, String t, String d, String c) {

        int level = 0;
        //Map<String, List> knowledgeMap = new HashMap<String, List>();
        List<Knowledge> knowledgeList = knowledgeMapper.selectFirstKnowledgeBySubjectId(subjectId);
        List<KnowledgeJson> knowledgeJsons = new ArrayList<KnowledgeJson>();
        for (Knowledge knowledge : knowledgeList) {
            level = 0;
            KnowledgeJson knowledgeJson = new KnowledgeJson();
            knowledgeJson.setLevel(level);


            if (String.valueOf(knowledge.getKnowledgeId()).equals(pointId)) {
                knowledgeJson.setSelect(true);
            }
            knowledgeJson.setId(knowledge.getKnowledgeId());
            knowledgeJson.setName(knowledge.getKnowledgeName());
            knowledgeJson.setPointList(getKnowledgeJson(knowledge.getKnowledgeId(), grade_id, others, subName, t, d, c, 1, pointId));
            knowledgeJson.setUrl("/tiku/" + grade_id + "/" + subName + "/point" + knowledge.getKnowledgeId() +
                    "/t" + t + "d" + d + "c" + c);

            knowledgeJsons.add(knowledgeJson);
        }

        //knowledgeMap.put("knowledge", knowledgeJsons);
        return knowledgeJsons;
    }

    @Override
    public int updateIsDeleteById(Integer knowledgeId) {
        return knowledgeMapper.updateIsDeleteById(knowledgeId);
    }

    @Override
    public Map<String, Integer> selectKnowledgeByName(String name) {
        return knowledgeMapper.selectKnowledgeByName(name);
    }

    @Override
    public Map<String, Integer> selectKnowledgeById(Integer id) {
        return knowledgeMapper.selectKnowledgeById(id);
    }

    @Override
    public List<KnowledgeList> selectKnowledgeList(String name) {
        return knowledgeMapper.selectKnowledgeList(name);
    }


    private List getKnowledgeJson(int knowledgeId, int grade_id, String others, String subName, String t, String d, String c, int level, String pointId) {
        List<Knowledge> knowledgeList = knowledgeMapper.selectSecondKnowledgeByKnowId1(knowledgeId);
        List<KnowledgeJson> knowledgeJsonList = new ArrayList<KnowledgeJson>();
        for (Knowledge knowledge2 : knowledgeList) {
            int leves = level;
            KnowledgeJson knowledgeJson2 = new KnowledgeJson();
            knowledgeJson2.setId(knowledge2.getKnowledgeId());
            knowledgeJson2.setName(knowledge2.getKnowledgeName());
            knowledgeJson2.setLevel(leves);
            List<KnowledgeJson> k = new ArrayList<KnowledgeJson>();

            leves = level + 1;
            k = getKnowledgeJson(knowledge2.getKnowledgeId(), grade_id, others, subName, t, d, c, leves, pointId);
            if (k != null) {
                knowledgeJson2.setPointList(k);
            }
            if (String.valueOf(knowledge2.getKnowledgeId()).equals(pointId)) {
                knowledgeJson2.setSelect(true);
            }
            knowledgeJson2.setUrl("/tiku/" + grade_id + "/" + subName + "/point" + knowledge2.getKnowledgeId() +
                    "/t" + t + "d" + d + "c" + c);

            knowledgeJsonList.add(knowledgeJson2);

        }
        return knowledgeJsonList;
    }
}
