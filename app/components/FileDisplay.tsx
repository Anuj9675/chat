// FileDisplay.tsx
import React from 'react';
import { FaFile, FaFilePdf, FaFileWord, FaFileArchive } from 'react-icons/fa';

interface FileDisplayProps {
  fileUrl: any;
  fileName: any;
  fileType: any;
}

const FileDisplay: React.FC<FileDisplayProps> = ({ fileUrl, fileName, fileType}) => {
  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) return <FaFilePdf />;
    if (fileType.includes('word')) return <FaFileWord />;
    if (fileType.includes('zip')) return <FaFileArchive />;
    return <FaFile />;
  };

  return (
    <div className="mt-2 flex items-center">
      <div className="text-2xl mr-2">
        {getFileIcon(fileType)}
      </div>
      <a
        href={fileUrl}
        download={fileName}
        className="text-blue-500 hover:underline"
      >
        {fileName}
      </a>
    </div>
  );
};

export default FileDisplay;
