import { useRef } from "react";
import ImageIcon from "../../assets/icons/ImageIcon";
import { formatDate } from "../../utils/formatDate";
import { Button } from "../Button";
import { useCreatePost } from "./useCreatePost";

interface PostCreateFormProps {
  onCancel: () => void;
  onSuccess: () => void;
}

export const PostCreateForm: React.FC<PostCreateFormProps> = ({
  onCancel,
  onSuccess,
}) => {
  const { loading, error, handleTitleChange, handleImageChange, handleSubmit } =
    useCreatePost(onSuccess);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleSubmit} className="mt-[20px]">
      <div className="rounded-10 border border-[#DBDBDB] shadow p-15">
        <header>
          <h2 className="text-accent font-medium text-[16px] leading-6">
            Новый пост
          </h2>
          <p className="text-[#D7D7D7] leading-7">
            {formatDate(new Date().toISOString(), true)}
          </p>
        </header>

        <fieldset className="pt-2.5">
          <label className="block">
            <span className="sr-only">Заголовок</span>
            <input
              type="text"
              name="title"
              placeholder="Введите заголовок"
              className="w-full bg-[#FAFAFA] rounded-5 px-[10px] py-[5px] font-medium text-[14px] placeholder-[#D7D7D7]"
              onChange={handleTitleChange}
            />
          </label>

          <div className="pt-[10px] flex flex-col items-start">
            <span className="text-[#D7D7D7] mb-[6px]">Прикрепите</span>

            <input
              type="file"
              ref={fileInputRef}
              id="upload-image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            <label
              htmlFor="upload-image"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  fileInputRef.current?.click();
                }
              }}
              className="inline-flex items-center gap-[10px] px-[10px] py-[5px]
                border border-[#DBDBDB] rounded-5 cursor-pointer text-[#A9A9A9]
                hover:border-accent hover:text-accent transition-colors"
            >
              <ImageIcon />
              <span>Фото</span>
            </label>
          </div>
        </fieldset>

        {error && <p className="text-xs text-error p-2">{error}</p>}
      </div>

      <div className="flex justify-between items-center pt-15">
        <Button type="button" onClick={onCancel} variant="secondary">
          Отмена
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Публикуем…" : "Опубликовать"}
        </Button>
      </div>
    </form>
  );
};
