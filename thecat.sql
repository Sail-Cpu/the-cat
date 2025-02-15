PGDMP                         |            thecat    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    33645    thecat    DATABASE     b   CREATE DATABASE thecat WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'French_France.1252';
    DROP DATABASE thecat;
                postgres    false            �            1259    33672    app_categories    TABLE     y   CREATE TABLE public.app_categories (
    categorie_id integer NOT NULL,
    categorie_name character varying NOT NULL
);
 "   DROP TABLE public.app_categories;
       public         heap    postgres    false            �            1259    33671    app_categories_categorie_id_seq    SEQUENCE     �   CREATE SEQUENCE public.app_categories_categorie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.app_categories_categorie_id_seq;
       public          postgres    false    214                       0    0    app_categories_categorie_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.app_categories_categorie_id_seq OWNED BY public.app_categories.categorie_id;
          public          postgres    false    213            �            1259    33654    applications    TABLE     �   CREATE TABLE public.applications (
    app_id integer NOT NULL,
    app_name character varying,
    app_description character varying(700),
    app_logo integer,
    app_images integer[],
    categorie_id integer
);
     DROP TABLE public.applications;
       public         heap    postgres    false            �            1259    33653    applications_app_id_seq    SEQUENCE     �   CREATE SEQUENCE public.applications_app_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.applications_app_id_seq;
       public          postgres    false    212                       0    0    applications_app_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.applications_app_id_seq OWNED BY public.applications.app_id;
          public          postgres    false    211            �            1259    33647    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(30),
    email character varying(254),
    password character varying(127),
    os character varying,
    job character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    33646    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    210            	           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    209            h           2604    33675    app_categories categorie_id    DEFAULT     �   ALTER TABLE ONLY public.app_categories ALTER COLUMN categorie_id SET DEFAULT nextval('public.app_categories_categorie_id_seq'::regclass);
 J   ALTER TABLE public.app_categories ALTER COLUMN categorie_id DROP DEFAULT;
       public          postgres    false    213    214    214            g           2604    33657    applications app_id    DEFAULT     z   ALTER TABLE ONLY public.applications ALTER COLUMN app_id SET DEFAULT nextval('public.applications_app_id_seq'::regclass);
 B   ALTER TABLE public.applications ALTER COLUMN app_id DROP DEFAULT;
       public          postgres    false    211    212    212            f           2604    33650    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    209    210    210                       0    33672    app_categories 
   TABLE DATA           F   COPY public.app_categories (categorie_id, categorie_name) FROM stdin;
    public          postgres    false    214          �          0    33654    applications 
   TABLE DATA           m   COPY public.applications (app_id, app_name, app_description, app_logo, app_images, categorie_id) FROM stdin;
    public          postgres    false    212   6       �          0    33647    users 
   TABLE DATA           L   COPY public.users (user_id, username, email, password, os, job) FROM stdin;
    public          postgres    false    210   Q       
           0    0    app_categories_categorie_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.app_categories_categorie_id_seq', 3, true);
          public          postgres    false    213                       0    0    applications_app_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.applications_app_id_seq', 2, true);
          public          postgres    false    211                       0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 48, true);
          public          postgres    false    209            n           2606    33679 "   app_categories app_categories_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.app_categories
    ADD CONSTRAINT app_categories_pkey PRIMARY KEY (categorie_id);
 L   ALTER TABLE ONLY public.app_categories DROP CONSTRAINT app_categories_pkey;
       public            postgres    false    214            l           2606    33661    applications applications_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_pkey PRIMARY KEY (app_id);
 H   ALTER TABLE ONLY public.applications DROP CONSTRAINT applications_pkey;
       public            postgres    false    212            j           2606    33652    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            o           2606    33680    applications fk_categorie_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.applications
    ADD CONSTRAINT fk_categorie_id FOREIGN KEY (categorie_id) REFERENCES public.app_categories(categorie_id);
 F   ALTER TABLE ONLY public.applications DROP CONSTRAINT fk_categorie_id;
       public          postgres    false    3182    214    212                !   x�3��LI�2�LI-�L��2��/����� UR      �     x�mP;N�@��SL	Rd)� �#�&R�4O��yh�oُ��98����I�uh"m���h�̮���D��zQ<h�W ��w�p������#�]�M�c�̌�q$	pIB W�3<�Q�� G[�b��@��s6f����V)��@˕�&�2qS��[�wU�����eؠ}|�/�F2|dA�q������Z�"�O�t�
q��v�֞]r��(D�ř�FG�M���G��8����%��!D�^�5cC-��?r�CS��/U�F      �     x���َ�8����������"��@����Z,̾S�����Hs�c˖�����1I mB� h涥�������p�;�YаA^	��^��#?�5�#jY��T9�F����ȟJ)�+��XlC�5�$w}$ ��
4/$�$�m�,��-�ǹ��.�P������Զ-n��R�Qj�Z��ګ�Y���I���c�}\"'�n���ʱ�G!�����a�%yE�W��ȃlkS���XRf��Z�WQ���a��ƕ]�r�R�ݬ�_c;��[\vKjL�Pu_�S<�(�,�G����a�?1E�g%g�&����xʒJ#h��>ʯ�wq��%�Sll�H���̅]/���͙���1䏺f���aE]�KM,1�CϏ/=?QO4��$O�szS�ƹ
��	�c����y8�r'� ���Q��D�6=K���Oܼ�����n�-^�ؼq�]m\�����%���R�0	b�&,:�#iK���B�y�\��B�}.���D�L��ֺ5'i �JNv��t�@�}ӷ#\�(�!�1?sUnqO�t����X�5l
}��z���8p��׉<I�S_���U
G��_�n�����ItQ9*;3˪\5����2*f�
{C�v�(�*���x^�"��0hàE*p�x��&�'I��T5a���P�qj�э��V,�f�1��bcݹ2�M�*L�:{b�X()���s?�>8z��1��~�h�� �c=�Ee�~aܛ���fƳJ��7���)��MuCCUW�9k[����lz#�y�gݍ\0K#�@v�FXrֈ}P���gɂr_�E�����x2j=���=�'�B�R���3v΅���p��6-94�QFq����������۞�eV�~Ss'���q����G��'Pq
�f���������1߿���-�_��f�3�ϯ�l��X��zE;�m��:[���z���n��N?���a��"�ץ_��3|�ߢ 
�#��m{o��MUovֵ�#�&%�v}"��k����ݵ��%n;��#��///��S{0     