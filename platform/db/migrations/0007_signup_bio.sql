-- Copy the optional bio from sign-up metadata into the new profile row.
-- Same as 0003's handle_new_user, plus the bio column.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, gender, country, bio)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', 'Anonymous'),
    (new.raw_user_meta_data->>'gender')::gender,
    coalesce(new.raw_user_meta_data->>'country', ''),
    nullif(left(trim(new.raw_user_meta_data->>'bio'), 500), '')
  );

  insert into public.violation_counts (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;
