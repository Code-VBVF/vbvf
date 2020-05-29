import axios from "axios";
import Vimeo from "vimeo";

require("dotenv").config();

export async function getVideos(vimeoFolder) {
  const options = {
    method: "GET",
    url: `https://api.vimeo.com/me/projects/${vimeoFolder}/videos?direction=desc`,
    headers: {
      Authorization: process.env.REACT_APP_VIMEO_KEY,
    },
  };
  return axios(options);
}

export function getDocumentIds(dropBoxFolder) {
  var options = {
    method: "POST",
    url: "https://api.dropboxapi.com/2/files/list_folder",
    headers: {
      Authorization: process.env.REACT_APP_DROPBOX_KEY,
      "Content-Type": "application/json",
    },
    data: {
      path: dropBoxFolder,
      recursive: false,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false,
      include_mounted_folders: true,
      include_non_downloadable_files: true,
    },
  };

  return axios(options);
}

async function getStudyNotes(studyNote) {
  let link = document.createElement("a");

  const options = {
    method: "POST",
    url: "https://content.dropboxapi.com/2/files/download",
    params: {
      authorization: process.env.REACT_APP_DROPBOX_KEY,
      arg: {
        path: studyNote.path_lower,
      },
      reject_cors_preflight: true,
    },
  };

  return axios(options)
    .then(async (response) => {
      var apiResult = JSON.parse(response.headers["dropbox-api-result"]);
      return {
        filename: apiResult.name,
        blob: await response.data,
      };
    })
    .then(async (responseObj) => {
      const newBlob = new Blob([responseObj.blob], {
        type: "application/pdf",
      });

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
      } else {
        const objUrl = window.URL.createObjectURL(newBlob);
        link.href = objUrl;
        link.download = responseObj.filename;
        link.text = "Download " + responseObj.filename.split(".")[0] + " Notes";
      }

      return await link;
    })
    .catch((err) => console.log("study notes catch: " + err));
}

export async function buildLessons(videos, documents) {
  var lessonArray = [];

  videos.data.data.forEach((video) => {
    var lessonObj = {};
    lessonObj.video = video;

    documents.data.entries.forEach(async (document) => {
      if (document.name.split(".")[0] == lessonObj.video.name) {
        lessonObj.document = document;
        lessonObj.notesLink = await getStudyNotes(document);
      }
    });

    lessonObj.id = video.name;
    lessonArray.push(lessonObj);
  });
  return await lessonArray;
}
