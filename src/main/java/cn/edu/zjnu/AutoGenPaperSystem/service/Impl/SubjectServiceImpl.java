package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.SubjectMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Grade;
import cn.edu.zjnu.AutoGenPaperSystem.model.SubJson;
import cn.edu.zjnu.AutoGenPaperSystem.model.Subject;
import cn.edu.zjnu.AutoGenPaperSystem.service.GradeService;
import cn.edu.zjnu.AutoGenPaperSystem.service.KnowledgeService;
import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import com.github.stuxuhai.jpinyin.PinyinException;
import com.github.stuxuhai.jpinyin.PinyinFormat;
import com.github.stuxuhai.jpinyin.PinyinHelper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class SubjectServiceImpl implements SubjectService {

    @Resource
    private SubjectMapper subjectMapper;
    @Resource
    private GradeService gradeServiceImpl;
    @Resource
    private KnowledgeService knowledgeServiceImpl;

    private static String localhost = "http://10.15.86.22:8111/AutoGenPaperSystem/api";

    public int deleteByPrimaryKey(Integer subjectId) {
        return 0;
    }

    public int insert(Subject record) {
        return 0;
    }

    public int insertSelective(Subject record) {
        return subjectMapper.insertSelective(record);
    }

    public String selectByPrimaryKey(Integer subjectId) {
        Subject subject = subjectMapper.selectByPrimaryKey(subjectId);
        String url = "";
        try {
             url = "/tiku/1/"+PinyinHelper.convertToPinyinString(subject.getSubjectName(), "", PinyinFormat.WITHOUT_TONE) + subject.getSubjectId() +"/point0";
        } catch (PinyinException e) {
            e.printStackTrace();
        }

        return url;
    }

    public int updateByPrimaryKeySelective(Subject record) {
        return 0;
    }

    public int updateByPrimaryKey(Subject record) {
        return 0;
    }

    public List selectAllSubject() {
        List<SubJson> subJsonList = new ArrayList<SubJson>();
        List<Grade> gradeList = gradeServiceImpl.selectAllGrade();
        for (Grade grade : gradeList) {
            SubJson subJson = new SubJson();
            subJson.setName(grade.getGradeName());
            List<Map> mapList = new ArrayList<Map>();
            List<Subject> subjectList = subjectMapper.selectByGradeId(grade.getGradeId());
            for (Subject subject : subjectList) {
                Map<String, String> subMap = new HashMap<String, String>();
                if (subject.getGradeId() == grade.getGradeId()) {
                    try {
                        subMap.put("url", "/tiku/"+grade.getGradeId() + "/"+PinyinHelper.convertToPinyinString(subject.getSubjectName(), "", PinyinFormat.WITHOUT_TONE) + subject.getSubjectId() +
                                "/point0");
                    } catch (PinyinException e) {
                        e.printStackTrace();
                    }
                    subMap.put("context", subject.getSubjectName());
                    subMap.put("subid", String.valueOf(subject.getSubjectId()));
                    mapList.add(subMap);
                }
            }
            subJson.setContextList(mapList);
            subJsonList.add(subJson);
        }
        return subJsonList;
    }

    @Override
    public List selectAllSubjectOnAdmin() {
        List subjects = new ArrayList();
        subjects.clear();
        List<Subject> subjectList =  subjectMapper.selectAllSubject();
        for (Subject subject:subjectList){
            //System.out.println(subject);
            Map map = new HashMap();
            map.clear();
            map.put("subName",subject.getSubjectName());
            map.put("points",knowledgeServiceImpl.selectFirstKnowledgeBySubjectId(subject.getSubjectId(),0,"","","","","",""));
            subjects.add(map);
        }

        return subjects;
    }

    public List<Subject> selectByGradeId(int id) {
        return subjectMapper.selectByGradeId(id);
    }

    @Override
    public int selectBysubName(String subName) {
        return subjectMapper.selectBysubName(subName);
    }
}
