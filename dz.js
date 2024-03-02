import path from "node:path";
import fsp from "node:fs/promises";

const readdir = async (filePath) => {
  try {
    const fileData = await fsp.readdir(filePath);
    
    await Promise.all(
      fileData.map(async (file) => {
        
        const fileStat = await fsp.stat(path.join(filePath, file));
        const fileSize = fileStat.size;
        const fileCreationDate = new Date(fileStat.birthtime);
        const formattedDate = `${fileCreationDate.getDate()}.${
          fileCreationDate.getMonth() + 1
        }.${fileCreationDate.getFullYear()}`;
        console.log("имя файла -", file, "| размер -", fileSize,"| дата создания -", formattedDate);"  дата создания"
      })
    );
  } catch (e) {
    console.log(e);
  }
};

const filePath = path.resolve(process.cwd(), "file");
readdir(filePath);
