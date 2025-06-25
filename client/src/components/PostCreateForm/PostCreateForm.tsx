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

  return (
    <form onSubmit={handleSubmit} className="rounded-lg shadow p-4 space-y-4">
      <header>
        <h2 className="text-accent font-semibold text-sm">Новый пост</h2>
        <p className="text-xs text-gray-500">
          {formatDate(new Date().toISOString(), true)}
        </p>
      </header>

      <fieldset className="space-y-2">
        <label className="block">
          <span className="sr-only">Заголовок</span>
          <input
            type="text"
            name="title"
            placeholder="Введите заголовок"
            className="w-full border rounded px-3 py-2 text-sm"
            onChange={handleTitleChange}
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-600">Прикрепите</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            id="upload-image"
          />
          <label
            htmlFor="upload-image"
            className="inline-flex items-center gap-2 px-4 py-2 border rounded cursor-pointer text-sm"
          >
            <ImageIcon />
            <span>Фото</span>
          </label>
        </label>
      </fieldset>

      {error && <p className="text-xs text-red-600">{error}</p>}

      <div className="flex justify-between items-center pt-4">
        <Button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded border text-gray-500"
        >
          Отмена
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="bg-accent text-white px-4 py-2 rounded"
        >
          {loading ? "Публикуем…" : "Опубликовать"}
        </Button>
      </div>
    </form>
  );
};
