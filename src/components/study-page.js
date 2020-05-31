import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getVideos, getDocumentIds, buildLessons } from "../util/index";
import { Link, useParams } from "react-router-dom";

import Content from "../content/study-content";
import LessonBlock from "./lesson-block";

export default function StudyPage() {
  let { studyId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [lessons, setLessons] = useState([]);
  //using the url param to search through studies and grab the right one
  const study = Content.studies.find((study) => study.url == studyId);

  useEffect(() => {
    const videos = getVideos(study.vimeoFolder); //videos at data.data
    const documents = getDocumentIds(study.dropBoxFolder); //docs at data.entries
    Promise.all([videos, documents]).then((values) => {
      buildLessons(values[0], values[1]).then((lessons) => {
        setLessons(lessons);
      });
    });
    setIsLoading(false);
  }, []);

  console.log(lessons);
  return (
    <div>
      <div className="study-container">
        <div className="description">
          <h3 className="description-title">{study.name}</h3>
          <p className="description-body">Study Description</p>
        </div>
        <div className="lesson-list">
          <h3 className="lesson-list-title">Available Lessons</h3>

          {isLoading ? (
            <p>Loading Lessons</p>
          ) : (
            lessons.map((lesson) => <LessonBlock key={lesson.id} {...lesson} />)
          )}
        </div>
      </div>
    </div>
  );
}
