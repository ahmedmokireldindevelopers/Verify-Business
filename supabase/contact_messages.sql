create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  subject text not null,
  business_name text,
  message text not null,
  locale text,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Allow public insert on contact_messages"
on public.contact_messages
for insert
to anon
with check (true);
