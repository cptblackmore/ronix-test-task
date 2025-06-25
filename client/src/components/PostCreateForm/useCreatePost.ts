import { useCallback, useState } from "react";
import { PostService } from "../../api/PostService";
import type { PostCreatePayload } from "../../types/Post";

export function useCreatePost(onSuccess: () => void) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
      if (error) setError(null);
    },
    [error],
  );

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) setImage(file);
      if (error) setError(null);
    },
    [error],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!title.trim() && !image) {
        setError("Добавьте заголовок или прикрепите фото");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const payload: PostCreatePayload = {};
        if (title.trim()) payload.title = title.trim();
        if (image) payload.image = image;

        await PostService.createPost(payload);
        onSuccess();
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Что-то пошло не так");
      } finally {
        setLoading(false);
      }
    },
    [title, image, onSuccess],
  );

  return {
    loading,
    error,
    handleTitleChange,
    handleImageChange,
    handleSubmit,
  };
}
