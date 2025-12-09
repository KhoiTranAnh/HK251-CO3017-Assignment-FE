import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

export const LectureModal = ({
  open,
  onClose,
  onSave,
  initialData,
  chapterId,
}) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkData, setLinkData] = useState({ name: "", url: "" });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mainMaterial: null,
    supplementaryMaterial: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      setLinkData({ name: "", url: "" });
      setShowLinkInput(false);
      if (initialData) {
        setFormData({
          title: initialData.title || "",
          description: "",
          mainMaterial: initialData.resource
            ? { name: "Existing File.pdf" } // Mock existing file
            : null,
          supplementaryMaterial: initialData.supplementaryMaterial || null,
        });
      } else {
        setFormData({
          title: "",
          description: "",
          mainMaterial: null,
          supplementaryMaterial: null,
        });
      }
      setErrors({});
    }
  }, [open, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleLinkChange = (e) => {
    const { name, value } = e.target;
    setLinkData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveLink = () => {
    if (linkData.name && linkData.url) {
      setFormData((prev) => ({
        ...prev,
        supplementaryMaterial: {
          name: linkData.name,
          url: linkData.url,
          type: "link",
        },
      }));
      setShowLinkInput(false);
    }

    console.log(formData);
  };

  // Mock File Upload
  const handleFileChange = (type) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [type]: file }));
    }
  };

  const handleRemoveFile = (type) => () => {
    setFormData((prev) => ({ ...prev, [type]: null }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Vui lòng nhập tên bài giảng";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log(chapterId)

    onSave(chapterId, {
      ...initialData,
      title: formData.title,
      // In a real app, we'd handle file upload here
      resource: formData.mainMaterial ? formData.mainMaterial.name : null
    });
  };

  const isEdit = !!initialData;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: { borderRadius: "16px", padding: "10px" },
      }}
    >
      <div className="text-center pt-2">
        <h2 className="text-xl font-bold text-gray-800">
          {isEdit ? "Cập nhật bài giảng" : "Thêm bài giảng"}
        </h2>
      </div>

      <DialogContent>
        <div className="space-y-6 mt-4">
          {/* Basic Info Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên bài giảng
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Nhập tên bài giảng"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
              )}
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mô tả ngắn cho bài giảng
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Nhập mô tả ngắn cho bài giảng"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> */}
          </div>

          {/* File Upload Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
            {/* Main Material */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tài liệu file bài giảng chính (file .pdf hoặc .mp4)
              </label>
              {formData.mainMaterial ? (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded text-red-600 font-bold text-xs uppercase">
                      PDF
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {formData.mainMaterial.name}
                      </p>
                      <p className="text-xs text-gray-500">3.2 MB</p>
                    </div>
                  </div>
                  <button
                    onClick={handleRemoveFile("mainMaterial")}
                    className="px-3 py-1 bg-amber-400 hover:bg-amber-500 text-white text-xs font-medium rounded transition-colors"
                  >
                    Xóa và chọn lại
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-colors">
                    <CloudUploadIcon fontSize="small" />
                    Chọn file
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange("mainMaterial")}
                      accept=".pdf,.mp4"
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Supplementary Material */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File hoặc link dẫn đến tài liệu bổ trợ
              </label>

              {formData.supplementaryMaterial ? (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded text-red-600 font-bold text-xs uppercase">
                      {formData.supplementaryMaterial.type === "link"
                        ? "LINK"
                        : "FILE"}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {formData.supplementaryMaterial.name}
                      </p>
                      <p className="text-xs text-gray-500">3.2 MB</p>
                    </div>
                  </div>
                  <button
                    onClick={handleRemoveFile("supplementaryMaterial")}
                    className="px-3 py-1 bg-amber-400 hover:bg-amber-500 text-white text-xs font-medium rounded transition-colors"
                  >
                    Xóa và chọn lại
                  </button>
                </div>
              ) : showLinkInput ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4 relative">
                  {/* Link Input Form */}
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Tên trang web
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={linkData.name}
                      onChange={handleLinkChange}
                      placeholder="Nhập tên trang web"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Đường link dẫn đến trang web
                    </label>
                    <input
                      type="text"
                      name="url"
                      value={linkData.url}
                      onChange={handleLinkChange}
                      placeholder="Nhập đường link dẫn đến trang web"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveLink}
                      className="px-4 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                    >
                      Lưu
                    </button>
                    <button
                      onClick={() => setShowLinkInput(false)}
                      className="px-4 py-1.5 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                    >
                      Hủy bỏ
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <label className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-colors">
                    <CloudUploadIcon fontSize="small" />
                    Chọn file
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange("supplementaryMaterial")}
                    />
                  </label>
                  <button
                    onClick={() => setShowLinkInput(true)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Thêm đường dẫn đến bài giảng
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>

      <DialogActions
        style={{ padding: "20px", justifyContent: "center", gap: "10px" }}
      >
        <button
          onClick={handleSubmit}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors min-w-[120px]"
        >
          {isEdit ? "Cập nhật" : "Thêm bài giảng"}
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors min-w-[120px]"
        >
          Hủy bỏ
        </button>
      </DialogActions>
    </Dialog>
  );
};
